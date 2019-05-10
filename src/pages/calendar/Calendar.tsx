import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect, Route, RouteComponentProps, Switch } from "react-router";

import { StoreState } from "store";

import DayCalendar from "pages/calendar/day/DayCalendar";
import MonthCalendar from "pages/calendar/month/MonthCalendar";
import WeekCalendar from "pages/calendar/week/WeekCalendar";

import { CalendarWrap } from "styles/pages/calendar/Calendar.styled";

type CalendarPropsTypes = RouteComponentProps & CalendarTypes;
class Calendar extends Component<CalendarPropsTypes> {
    render() {
        const { CalendarReducer, match } = this.props;
        return (
            <CalendarWrap>
                <Switch>
                    <Route
                        path={`${match.path}/month`}
                        component={MonthCalendar}
                    />
                    <Route
                        path={`${match.path}/week`}
                        component={WeekCalendar}
                    />
                    <Route path={`${match.path}/day`} component={DayCalendar} />

                    <Redirect to={`${match.path}/${CalendarReducer.type}`} />
                </Switch>
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
