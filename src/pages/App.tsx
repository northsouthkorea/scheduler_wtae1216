import Contents from "pages/common/Contents";
import Header from "pages/common/Header";
import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";

class App extends Component {
    render() {
        return (
            <Router>
                <Header />
                <Contents />
            </Router>
        );
    }
}

export default App;
