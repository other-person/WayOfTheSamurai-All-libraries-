import ReactDOM from 'react-dom';
import React from "react";
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {store} from "./Redux/ReduxStore";


 let rerenderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <App store={store} state={store.getState()}
                 dispatch={store.dispatch.bind(store)}
                 messageForNewPost={store._state.myPostsDataPage.messageForNewPost}
                 messageForDialogs = {store._state.dialogTextDataPage.messageForDialogs}
            />
        </BrowserRouter>
        , document.getElementById('root'));
}


store.subscribe(rerenderEntireTree)
rerenderEntireTree();