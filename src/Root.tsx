import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import store from "store";

import App from "pages/App";

import GlobalStyle from "styles/common.styled";

const Root = () => (
    <BrowserRouter>
        <Provider store={store}>
            <GlobalStyle />
            <App />
        </Provider>
    </BrowserRouter>
);

export default Root;
