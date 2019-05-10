import React, { Component } from "react";
import { connect } from "react-redux";

import { CalendarAction } from "store/actions";

import { Types } from "constants/Calendar";

import { bindActionCreators } from "redux";

class DayCalendar extends Component<DayCalendarTypes> {
    constructor(props: DayCalendarTypes) {
        super(props);

        this.props.setType(Types.DAY);
    }

    render() {
        return <div>day</div>;
    }
}

const mapDispatchToProps = (dispatch: any) => ({
    ...bindActionCreators(CalendarAction, dispatch)
});

type DayCalendarTypes = ReturnType<typeof mapDispatchToProps>;

export default connect(
    null,
    mapDispatchToProps
)(DayCalendar);
