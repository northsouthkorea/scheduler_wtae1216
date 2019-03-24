import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { StoreState } from "store";
import { MainAction } from "store/actions";

interface AppProps  {
    test: string
}

class App extends Component<AppProps & AppPropsTypes> {

    setTemp = () => {
        this.props.setTemp('temp');
    };

    render() {
        const {MainReducer} = this.props;
        const {temp} = MainReducer;

        return (
            <div id='main'>
                <p>{temp}</p>
                <button onClick={this.setTemp}>setTemp</button>
            </div>
        );
    }
}

const mapStateToProps = (state: StoreState) => ({
    MainReducer: state.MainReducer
});

const mapDispatchToProps = (dispatch: any) => ({
    ...bindActionCreators(MainAction, dispatch)
});

type AppPropsTypes = ReturnType<typeof mapStateToProps>
                    & ReturnType<typeof mapDispatchToProps>

export default connect(mapStateToProps, mapDispatchToProps)(App);
