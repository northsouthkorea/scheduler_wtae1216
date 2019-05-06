import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { Types } from "constants/Calendar";
import { CalendarAction } from "store/actions";

class DayCalendar extends Component<DayCalendarTypes>  {

    constructor(props: DayCalendarTypes)   {
        super(props);

        this.props.setType(Types.DAY);
    }

    render()    {
        return (
            <div>day</div>
        );
    }
}

const mapDispatchToProps = (dispatch: any) => ({
    ...bindActionCreators(CalendarAction, dispatch)
});

type DayCalendarTypes = ReturnType<typeof mapDispatchToProps>;

export default connect(null, mapDispatchToProps)(DayCalendar);