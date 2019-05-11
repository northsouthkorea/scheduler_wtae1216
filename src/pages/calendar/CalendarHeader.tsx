import React, { ChangeEvent, Component } from "react";
import { connect } from "react-redux";
import { MenuItem, OutlinedInput, Select } from "@material-ui/core";

import { bindActionCreators, Dispatch } from "redux";
import moment from "moment";

import { StoreState } from "store";
import { CalendarAction } from "store/actions";

import { ProcedureTypes, Types, TypesText } from "constants/Calendar";

import {
    ArrowWrap,
    CalendarHeaderWrap,
    DateText,
    DateWrap,
    MenuWrap,
    TodayButton,
    TypeFormControl
} from "styles/pages/calendar/CalendarHeader.styled";
import { ChevronLeft, ChevronRight } from "styles/icons.styled";

interface CalendarHeaderStates {
    dateText: string;
}

class CalendarHeader extends Component<CalendarHeaderTypes> {
    state: CalendarHeaderStates = {
        dateText: null
    };

    static getDerivedStateFromProps(nextProps: CalendarHeaderTypes) {
        const { date, type } = nextProps.CalendarReducer;
        const nextDate = date.clone();
        let dateText = date.format("YYYY년 MM월");

        switch (type) {
            case Types.WEEK:
                nextDate.add(1, Types.WEEK);
                if (date.month() !== nextDate.month()) {
                    dateText += nextDate.format(" - MM월");
                }
                break;
            case Types.DAY:
                dateText += date.format(" DD일");
                break;
        }

        return { dateText };
    }

    // change calendar types (month/week/day)
    handleChangeType = (event: ChangeEvent<HTMLSelectElement>) => {
        const type: Types = event.target.value as Types;
        this.props.setType(type);
    };

    // change calendar date
    handleChangeDate = (procedureType: ProcedureTypes) => () => {
        const { CalendarReducer } = this.props;
        const { type, date } = CalendarReducer;
        const changeDate = date.clone();

        changeDate.add(procedureType, type);
        this.props.setDate(changeDate);
    };

    // change calendar date to current date
    handleChangeToday = () => {
        const today = moment();
        this.props.setDate(today);
    };

    render() {
        const { type } = this.props.CalendarReducer;
        const { dateText } = this.state;

        return (
            <CalendarHeaderWrap>
                <DateWrap>
                    <TodayButton
                        variant={"outlined"}
                        onClick={this.handleChangeToday}>
                        오늘
                    </TodayButton>
                    <ArrowWrap>
                        <ChevronLeft
                            onClick={this.handleChangeDate(
                                ProcedureTypes.PREV
                            )}>
                            %lt;
                        </ChevronLeft>
                        <ChevronRight
                            onClick={this.handleChangeDate(
                                ProcedureTypes.NEXT
                            )}>
                            %rt;
                        </ChevronRight>
                    </ArrowWrap>
                    <DateText>{dateText}</DateText>
                </DateWrap>
                <MenuWrap>
                    <TypeFormControl variant="outlined">
                        <Select
                            value={type}
                            onChange={this.handleChangeType}
                            input={
                                <OutlinedInput
                                    className={"outline-input"}
                                    name="type"
                                    labelWidth={0}
                                />
                            }>
                            <MenuItem value={Types.DAY}>
                                {TypesText.DAY}
                            </MenuItem>
                            <MenuItem value={Types.WEEK}>
                                {TypesText.WEEK}
                            </MenuItem>
                            <MenuItem value={Types.MONTH}>
                                {TypesText.MONTH}
                            </MenuItem>
                        </Select>
                    </TypeFormControl>
                </MenuWrap>
            </CalendarHeaderWrap>
        );
    }
}

const mapStateToProps = (state: StoreState) => ({
    CalendarReducer: state.CalendarReducer
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    ...bindActionCreators(CalendarAction, dispatch)
});

type CalendarHeaderTypes = ReturnType<typeof mapStateToProps> &
    ReturnType<typeof mapDispatchToProps>;

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CalendarHeader);
