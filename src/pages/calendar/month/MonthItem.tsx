import React, { Component } from "react";
import { connect } from "react-redux";

import { StoreState } from "store";

import {
    DateText,
    MonthItemWrap
} from "styles/pages/calendar/month/MonthItem.styled";

import { Moment } from "moment";

interface MonthItemProps {
    date: Moment;
    today: boolean;
}

type MonthItemPropsTypes = MonthItemProps & MonthItemTypes;

class MonthItem extends Component<MonthItemPropsTypes> {
    render() {
        const { date, CalendarReducer, today } = this.props;
        const currentDate = CalendarReducer.date,
            dateText =
                date.date() === 1 ? date.format("M월 D일") : date.format("D"),
            different = date.month() !== currentDate.month();

        return (
            <MonthItemWrap>
                <DateText different={different} today={today}>
                    {dateText}
                </DateText>
            </MonthItemWrap>
        );
    }
}

const mapStateToProps = (state: StoreState) => ({
    CalendarReducer: state.CalendarReducer
});

type MonthItemTypes = ReturnType<typeof mapStateToProps>;

export default connect(mapStateToProps)(MonthItem);
