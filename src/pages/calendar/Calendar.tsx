import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect, Route, RouteComponentProps, Switch } from "react-router";

import DayCalendar from "components/calendar/day/DayCalendar";
import MonthCalendar from "components/calendar/month/MonthCalendar";
import WeekCalendar from "components/calendar/week/WeekCalendar";
import { StoreState } from "store";

import { CalendarWrap } from "styles/components/calendar/Calendar.styled";

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
        prevProps: Readonly<CalendarPropsTypes>,
        prevState: Readonly<{}>,
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
