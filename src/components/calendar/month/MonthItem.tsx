import React, { Component } from "react";
import { connect } from "react-redux";
import { Moment } from "moment";

import { MonthItemWrap } from "styles/components/calendar/month/MonthItem.styled";

import { StoreState } from "store";

interface MonthItemState {
    dateText: string,
    dayText: string
}

interface MonthItemProps {
    date: Moment
}

type MonthItemPropsTypes = MonthItemProps & MonthItemTypes;

class MonthItem extends Component<MonthItemPropsTypes>   {

    state: MonthItemState = {
        dateText: null,
        dayText: null
    };

    static getDerivedStateFromProps(nextProps: MonthItemPropsTypes)  {
        const { date, CalendarReducer } = nextProps;
        const currentDate: Moment = CalendarReducer.date.clone();

        const dateText: string = (date.month() !== currentDate.month()) ?
            date.format('MM.DD') :
            date.format('DD');

        return {
            dateText,
            dayText: date.format('dd')
        }
    }

    render()    {

        const { dayText, dateText } = this.state;

        return (
            <MonthItemWrap>
                {dayText} | {dateText}
            </MonthItemWrap>
        );
    }
}

const mapStateToProps = (state: StoreState) => ({
    CalendarReducer: state.CalendarReducer
});

type MonthItemTypes = ReturnType<typeof mapStateToProps>;

export default connect(mapStateToProps)(MonthItem);