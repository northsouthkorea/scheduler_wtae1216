import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect, Route, RouteComponentProps, Switch } from "react-router";

import { StoreState } from "store";

import { ProcedureTypes } from "constants/Common";

import DayCalendar from "pages/calendar/day/DayCalendar";
import MonthCalendar from "pages/calendar/month/MonthCalendar";
import WeekCalendar from "pages/calendar/week/WeekCalendar";

import {
    CalendarAniWrap,
    CalendarWrap
} from "styles/pages/calendar/Calendar.styled";

import { Moment } from "moment";

type CalendarPropsTypes = RouteComponentProps & CalendarTypes;

interface CalendarState {
    action: ProcedureTypes;
    currentDate: Moment;
}

class Calendar extends Component<CalendarPropsTypes> {
    state: CalendarState = {
        action: null,
        currentDate: null
    };

    static getDerivedStateFromProps(
        nextProps: CalendarPropsTypes,
        state: CalendarState
    ) {
        const { CalendarReducer } = nextProps;
        const date: Moment = CalendarReducer.date.clone(),
            currentDate = state.currentDate || date;

        let action = ProcedureTypes.CURRENT;
        if (date.valueOf() < currentDate.valueOf()) {
            action = ProcedureTypes.PREV;
        } else if (date.valueOf() > currentDate.valueOf()) {
            action = ProcedureTypes.NEXT;
        }

        return {
            action,
            currentDate: date
        };
    }
    render() {
        const { CalendarReducer, match } = this.props;
        const { action, currentDate } = this.state;
        return (
            <CalendarWrap>
                <CalendarAniWrap
                    action={action}
                    date={currentDate.format("YYYYMMDD")}>
                    <Switch>
                        <Route
                            path={`${match.path}/month`}
                            component={MonthCalendar}
                        />
                        <Route
                            path={`${match.path}/week`}
                            component={WeekCalendar}
                        />
                        <Route
                            path={`${match.path}/day`}
                            component={DayCalendar}
                        />

                        <Redirect
                            to={`${match.path}/${CalendarReducer.type}`}
                        />
                    </Switch>
                </CalendarAniWrap>
            </CalendarWrap>
        );
    }

    componentDidUpdate(
        prevProps: CalendarPropsTypes,
        prevState: {},
        snapshot?: any
    ) {
        const { CalendarReducer, match } = this.props;
        if (CalendarReducer.type !== prevProps.CalendarReducer.type) {
            this.props.history.push(`${match.path}/${CalendarReducer.type}`);
        }
    }
}

const mapStateToProps = (state: StoreState) => ({
    CalendarReducer: state.CalendarReducer
});

type CalendarTypes = ReturnType<typeof mapStateToProps>;

export default connect(mapStateToProps)(Calendar);
