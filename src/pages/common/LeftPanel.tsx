import React, { Component } from "react";
import { connect } from "react-redux";

import { StoreState } from "store";
import { LeftPanelWrap } from "styles/pages/common/LeftPanel.styled";


class LeftPanel extends Component<LeftPanelTypes>   {

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

type LeftPanelTypes = ReturnType<typeof mapStateToProps>;

export default connect(mapStateToProps)(LeftPanel);