import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Contents from "pages/common/Contents";
import Header from "pages/common/Header";

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
