import React, { Component } from "react";
import { connect } from "react-redux";

import { StoreState } from "store";
import { CalendarAction } from "store/actions";

import MonthItem from "pages/calendar/month/MonthItem";

import { ProcedureTypes, Types } from "constants/Calendar";
import Util from "lib/Util";

import {
    MonthCalendarWrap,
    MonthList,
    WeekList
} from "styles/pages/calendar/month/MonthCalendar.styled";

import moment, { Moment } from "moment";
import { bindActionCreators } from "redux";

interface MonthCalendarState {
    currentDate: Moment;
    minDate: Moment;
    maxDate: Moment;
    action: ProcedureTypes;
}

class MonthCalendar extends Component<MonthCalendarTypes> {
    state: MonthCalendarState = {
        currentDate: null,
        minDate: null,
        maxDate: null,
        action: null
    };

    constructor(props: MonthCalendarTypes) {
        super(props);
        this.props.setType(Types.MONTH);
    }

    static getDerivedStateFromProps(
        nextProps: MonthCalendarTypes,
        state: MonthCalendarState
    ) {
        const { CalendarReducer } = nextProps;
        const date: Moment = CalendarReducer.date.clone(),
            minDate: Moment = CalendarReducer.date.clone(),
            maxDate: Moment = CalendarReducer.date.clone();
        const currentDate = state.currentDate || date;

        let action = ProcedureTypes.CURRENT;
        if (date.valueOf() < currentDate.valueOf()) {
            action = ProcedureTypes.PREV;
        } else if (date.valueOf() > currentDate.valueOf()) {
            action = ProcedureTypes.NEXT;
        }

        minDate.date(1).subtract(minDate.day(), "days");

        maxDate
            .add(1, "month")
            .date(0)
            .add(7 - maxDate.day(), "days");

        return {
            currentDate: date,
            action,
            minDate,
            maxDate
        };
    }

    render() {
        const { minDate, maxDate, action, currentDate } = this.state;
        const subtractWeeks: number = Math.ceil(
                (maxDate.valueOf() - minDate.valueOf()) / 8.64e7 / 7
            ),
            subtractArray: number[] = Util.range(subtractWeeks),
            weekArray: number[] = Util.range(7);

        const date = minDate.clone().subtract(1, "days"),
            nowDate = moment(),
            weekDate = minDate.clone().subtract(1, "days");

        return (
            <MonthCalendarWrap action={action} month={currentDate.month()}>
                <WeekList>
                    {weekArray.map((week: number) => (
                        <div key={week}>
                            {weekDate.add(1, "day").format("dd")}
                        </div>
                    ))}
                </WeekList>
                {subtractArray.map((week: number) => (
                    <MonthList key={week}>
                        {weekArray.map(() => {
                            const today: boolean =
                                date.add(1, "day").format("YYYYMMDD") ===
                                nowDate.format("YYYYMMDD");
                            return (
                                <MonthItem
                                    key={date.format("YYYYMMDD")}
                                    date={date.clone()}
                                    today={today}
                                />
                            );
                        })}
                    </MonthList>
                ))}
            </MonthCalendarWrap>
        );
    }
}

const mapStateToProps = (state: StoreState) => {
    return {
        CalendarReducer: state.CalendarReducer
    };
};

const mapDispatchToProps = (dispatch: any) => ({
    ...bindActionCreators(CalendarAction, dispatch)
});

type MonthCalendarTypes = ReturnType<typeof mapStateToProps> &
    ReturnType<typeof mapDispatchToProps>;

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MonthCalendar);
