import App from 'pages/App';
import React from 'react';
import { Provider } from "react-redux";
import { BrowserRouter } from 'react-router-dom';
import store from 'store';
import GlobalStyle from 'styles/common';

const Root = () => (
    <BrowserRouter>
        <Provider store={store}>
            <GlobalStyle/>
            <App test={'test'}/>
        </Provider>
    </BrowserRouter>
);

export default Root;