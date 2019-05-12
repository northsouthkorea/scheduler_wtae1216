import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect, Route, RouteComponentProps, Switch } from "react-router";

import { Moment } from "moment";
import { bindActionCreators } from "redux";

import { StoreState } from "store";
import { CalendarAction } from "store/actions";

import { Types } from "constants/Calendar";

import DayCalendar from "pages/calendar/day/DayCalendar";
import MonthCalendar from "pages/calendar/month/MonthCalendar";
import WeekCalendar from "pages/calendar/week/WeekCalendar";

import {
    CalendarAniWrap,
    CalendarWrap
} from "styles/pages/calendar/Calendar.styled";

type CalendarPropsTypes = RouteComponentProps & CalendarTypes;

class Calendar extends Component<CalendarPropsTypes> {
    constructor(props: CalendarPropsTypes) {
        super(props);
        const { location, CalendarReducer } = props;
        const { type: originalType, date: originalDate } = CalendarReducer,
            date = CalendarReducer.date.clone();

        // set url pattern
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
        date.year(parseInt(urlYear, 10) || originalDate.year())
            .month((parseInt(urlMonth, 10) || originalDate.month() + 1) - 1)
            .date(parseInt(urlDate, 10) || originalDate.date());
        if (date.valueOf() !== originalDate.valueOf()) {
            props.setDate(date);
        }
    }

    shouldComponentUpdate(nextProps: CalendarPropsTypes) {
        const { type, date } = this.props.CalendarReducer;
        const { type: nextType, date: nextDate } = nextProps.CalendarReducer;

        return !(nextType === type && nextDate.valueOf() === date.valueOf());
    }

    render() {
        const { CalendarReducer, match } = this.props;
        const { type, date, action } = CalendarReducer;
        return (
            <CalendarWrap>
                <CalendarAniWrap action={action} date={date.format("YYYYMMDD")}>
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

                        <Redirect to={this.getNewUrl(match.path, type, date)} />
                    </Switch>
                </CalendarAniWrap>
            </CalendarWrap>
        );
    }

    componentDidUpdate() {
        const { CalendarReducer, match, location, history } = this.props;
        const { type, date } = CalendarReducer;

        const url = this.getNewUrl(match.path, type, date);
        if (location.pathname !== url) {
            history.push(url);
        }
    }

    // get new url from parameter
    private getNewUrl = (path: string, type: string, date: Moment): string =>
        `${path}/${type}/${date.year()}/${date.month() + 1}/${date.date()}`;
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
