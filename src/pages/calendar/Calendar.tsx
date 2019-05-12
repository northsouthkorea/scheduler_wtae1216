import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect, Route, RouteComponentProps, Switch } from "react-router";

import { createBrowserHistory } from "history";
import { bindActionCreators } from "redux";
import { Moment } from "moment";

import { StoreState } from "store";
import { CalendarAction } from "store/actions";

import { ProcedureTypes } from "constants/Common";
import { Types } from "constants/Calendar";

import DayCalendar from "pages/calendar/day/DayCalendar";
import MonthCalendar from "pages/calendar/month/MonthCalendar";
import WeekCalendar from "pages/calendar/week/WeekCalendar";

import {
    CalendarAniWrap,
    CalendarWrap
} from "styles/pages/calendar/Calendar.styled";

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

    constructor(props: CalendarPropsTypes) {
        super(props);

        // set url pattern
        const { location, CalendarReducer } = props;
        const originalType = CalendarReducer.type,
            originalDate = CalendarReducer.date,
            date = CalendarReducer.date.clone();
        const [
            ,
            type = originalType,
            urlYear = String(date.year()),
            urlMonth = String(date.month() + 1),
            urlDate = String(date.date())
        ]: string[] = location.pathname.split("/").filter((n) => n);

        // set type from url
        const calendarType: Types = (Object.values(Types).includes(type)
            ? type
            : originalType) as Types;
        if (calendarType !== originalType) {
            props.setType(calendarType);
        }

        // set date from url
        const newYear: number = parseInt(urlYear, 10) || originalDate.year();
        const newMonth: number =
            (parseInt(urlMonth, 10) || originalDate.month() + 1) - 1;
        const newDate: number = parseInt(urlDate, 10) || originalDate.date();
        date.year(newYear)
            .month(newMonth)
            .date(newDate);
        if (date.valueOf() !== originalDate.valueOf()) {
            props.setDate(date);
        }
    }

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
        const { type, date } = CalendarReducer;
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
                            to={`${
                                match.path
                            }/${type}/${date.year()}/${date.month() +
                                1}/${date.date()}`}
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
        const { CalendarReducer, match, location } = this.props;
        const { type, date } = CalendarReducer;

        const url = `${match.path}/${type}/${date.year()}/${date.month() +
            1}/${date.date()}`;
        if (location.pathname !== url) {
            const history = createBrowserHistory();
            history.push(url);
        }
    }
}

const mapStateToProps = (state: StoreState) => ({
    CalendarReducer: state.CalendarReducer
});

const mapDispatchToProps = (dispatch: any) => ({
    ...bindActionCreators(CalendarAction, dispatch)
});

type CalendarTypes = ReturnType<typeof mapStateToProps> &
    ReturnType<typeof mapDispatchToProps>;

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Calendar);
