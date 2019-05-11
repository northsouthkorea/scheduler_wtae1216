import React, { Component } from "react";
import { connect } from "react-redux";

import { StoreState } from "store";
import { CalendarAction } from "store/actions";

import { Types } from "constants/Calendar";
import Util from "lib/Util";

import MonthItem from "pages/calendar/month/MonthItem";

import {
    MonthCalendarWrap,
    MonthList,
    WeekList
} from "styles/pages/calendar/month/MonthCalendar.styled";

import moment, { Moment } from "moment";
import { bindActionCreators } from "redux";

interface MonthCalendarState {
    minDate: Moment;
    maxDate: Moment;
}

class MonthCalendar extends Component<MonthCalendarTypes> {
    state: MonthCalendarState = {
        minDate: null,
        maxDate: null
    };

    constructor(props: MonthCalendarTypes) {
        super(props);
        this.props.setType(Types.MONTH);
    }

    static getDerivedStateFromProps(nextProps: MonthCalendarTypes) {
        const { CalendarReducer } = nextProps;
        const minDate: Moment = CalendarReducer.date.clone(),
            maxDate: Moment = CalendarReducer.date.clone();

        minDate.date(1).subtract(minDate.day(), "days");

        maxDate
            .add(1, "month")
            .date(0)
            .add(7 - maxDate.day(), "days");

        return {
            minDate,
            maxDate
        };
    }

    render() {
        const { minDate, maxDate } = this.state;
        const subtractWeeks: number = Math.ceil(
                (maxDate.valueOf() - minDate.valueOf()) / 8.64e7 / 7
            ),
            subtractArray: number[] = Util.range(subtractWeeks),
            weekArray: number[] = Util.range(7);

        const date = minDate.clone().subtract(1, "days"),
            nowDate = moment(),
            weekDate = minDate.clone().subtract(1, "days");

        return (
            <MonthCalendarWrap>
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
