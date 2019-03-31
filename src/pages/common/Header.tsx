import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { LeftPanelAction } from "store/actions";
import { StoreState } from "store/reducers";
import { HeaderWrap, LeftWrap, MenuBtn, MenuName } from "styles/common/Haeder.styled";

class Header extends Component<HeaderPropsTypes> {

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

type HeaderPropsTypes = ReturnType<typeof mapStateToProps>
                        & ReturnType<typeof mapDispatchToProps>;

export default connect(mapStateToProps, mapDispatchToProps)(Header);
