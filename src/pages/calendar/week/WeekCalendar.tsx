import React, { Component } from "react";
import { connect } from "react-redux";

import { CalendarAction } from "store/actions";

import { Types } from "constants/Calendar";

import { bindActionCreators } from "redux";

class WeekCalendar extends Component<WeekCalendarTypes> {
    constructor(props: WeekCalendarTypes) {
        super(props);

        this.props.setType(Types.WEEK);
    }

    render() {
        return <div>week</div>;
    }
}

const mapDispatchToProps = (dispatch: any) => ({
    ...bindActionCreators(CalendarAction, dispatch)
});

type WeekCalendarTypes = ReturnType<typeof mapDispatchToProps>;

export default connect(
    null,
    mapDispatchToProps
)(WeekCalendar);
