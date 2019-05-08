import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { Types } from "constants/Calendar";
import { CalendarAction } from "store/actions";

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
