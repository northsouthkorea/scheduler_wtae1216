import React, { Component } from "react";
import { connect } from "react-redux";
import { StoreState } from "store/reducers";
import { LeftPanelWrap } from "styles/common/LeftPanel.styled";


class LeftPanel extends Component<LeftPanelPropsTypes>   {

    render()    {
        const { LeftPanelReducer } = this.props;
        return (
            <LeftPanelWrap show={LeftPanelReducer.show}>
                left panel
            </LeftPanelWrap>
        );
    }
}

const mapStateToProps = (state: StoreState) => ({
    LeftPanelReducer: state.LeftPanelReducer
});

type LeftPanelPropsTypes = ReturnType<typeof mapStateToProps>;

export default connect(mapStateToProps)(LeftPanel);