import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Moment } from "moment";

import Util from "lib/Util";

import { Types } from "constants/Calendar";
import { CalendarAction } from "store/actions";
import { StoreState } from "store";

import { MonthCalendarWrap, MonthList } from "styles/components/calendar/month/MonthCalendar.styled";

import MonthItem from "components/calendar/month/MonthItem";

interface MonthCalendarState {
    minDate: Moment,
    maxDate: Moment
}

class MonthCalendar extends Component<MonthCalendarTypes>  {

    state: MonthCalendarState = {
        minDate: null,
        maxDate: null
    };

    constructor(props: MonthCalendarTypes)   {
        super(props);
        this.props.setType(Types.MONTH);
    }

    static getDerivedStateFromProps(nextProps: MonthCalendarTypes)  {
        const { CalendarReducer } = nextProps;
        const minDate = CalendarReducer.date.clone(),
            maxDate = CalendarReducer.date.clone();

        minDate.date(1)
            .subtract(minDate.day(), 'days');

        maxDate.add(1, 'month').date(0)
            .add(7 - maxDate.day(), 'days');

        return {
            minDate,
            maxDate
        };
    }

    render()    {
        const { minDate, maxDate } = this.state;
        const subtractWeeks = (maxDate.valueOf() - minDate.valueOf()) / 8.64E7 / 7
            , subtractArray = Util.range(subtractWeeks)
            , weekArray = Util.range(7);

        const date = minDate.clone().subtract(1, 'days');

        return (
            <MonthCalendarWrap>
                {subtractArray.map((key: number) => (
                    <MonthList key={key}>
                        {weekArray.map((itemKey: number) => (
                            <MonthItem key={itemKey} date={date.add(1, 'days').clone()}/>
                        ))}
                    </MonthList>
                ))}
            </MonthCalendarWrap>
        );
    }
}

const mapStateToProps = (state: StoreState) => {
    return {
        CalendarReducer: state.CalendarReducer
    }
};

const mapDispatchToProps = (dispatch: any) => ({
    ...bindActionCreators(CalendarAction, dispatch)
});

type MonthCalendarTypes = ReturnType<typeof mapStateToProps>
                        & ReturnType<typeof mapDispatchToProps>;

export default connect(mapStateToProps, mapDispatchToProps)(MonthCalendar);