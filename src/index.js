import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {initStore} from "./store/store";
import {App} from "./components/app/app";
import "./index.scss";

const store = initStore();
ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById("root")
);
