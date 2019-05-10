import React, { Component } from "react";
import { Redirect, Route, Switch } from "react-router";

import Calendar from "pages/calendar/Calendar";
import LeftPanel from "pages/common/LeftPanel";

import { ContentsWrap } from "styles/pages/common/Contents.styled";

class Contents extends Component {
    render() {
        return (
            <ContentsWrap>
                <LeftPanel />
                <Switch>
                    <Route path={"/calendar"} component={Calendar} />

                    <Redirect to={`/calendar`} />
                </Switch>
            </ContentsWrap>
        );
    }
}

export default Contents;
