import Calendar from "pages/calendar/Calendar";
import LeftPanel from "pages/common/LeftPanel";
import React, { Component } from 'react';
import { Route, Switch } from "react-router";
import { ContentsWrap } from "styles/common/Contents.styled";

class Contents extends Component    {
    render()    {
        return (
            <ContentsWrap>
                <LeftPanel/>
                <Switch>
                    <Route path={'/'} exact component={Calendar}/>
                </Switch>
            </ContentsWrap>
        );
    }
}

export default Contents;