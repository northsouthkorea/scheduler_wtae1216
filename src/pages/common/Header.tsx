import React, { Component } from "react";
import { connect } from "react-redux";
import { Route, Switch } from "react-router";

import { StoreState } from "store";
import { LeftPanelAction } from "store/actions";

import CalendarHeader from "pages/calendar/CalendarHeader";

import {
    HeaderWrap,
    LeftWrap,
    MenuBtn,
    MenuName,
    RightWrap
} from "styles/pages/common/Haeder.styled";

import { bindActionCreators } from "redux";

class Header extends Component<HeaderTypes> {
    handleMenuBtnClick = () => {
        this.props.toggleShow();
    };

    render() {
        const { HeaderReducer, LeftPanelReducer } = this.props;

        return (
            <HeaderWrap>
                <LeftWrap>
                    <MenuBtn
                        size={30}
                        show={LeftPanelReducer.show}
                        onClick={this.handleMenuBtnClick}
                    />
                    <MenuName>{HeaderReducer.title}</MenuName>
                </LeftWrap>
                <RightWrap>
                    <Switch>
                        <Route path={`/calendar`} component={CalendarHeader} />
                    </Switch>
                </RightWrap>
            </HeaderWrap>
        );
    }
}

const mapStateToProps = (state: StoreState) => ({
    HeaderReducer: state.HeaderReducer,
    LeftPanelReducer: state.LeftPanelReducer
});

const mapDispatchToProps = (dispatch: any) => ({
    ...bindActionCreators(LeftPanelAction, dispatch)
});

type HeaderTypes = ReturnType<typeof mapStateToProps> &
    ReturnType<typeof mapDispatchToProps>;

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Header);
