import React from 'react';
import {Provider} from "react-redux";
import store from '../redux/store';
import Header from "../components/header";
import WorkSpace from "../components/work-space";

function Main() {

    return (
        <Provider store={store}>
            <Header />
            <WorkSpace />
        </Provider>
    );
}

export default Main;