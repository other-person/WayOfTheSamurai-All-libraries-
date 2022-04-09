import ReactDOM from 'react-dom';
import React from "react";
import './index.css';
import App from './App';
import {store} from "./Redux/Store";
import {BrowserRouter} from "react-router-dom";



let rerenderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <App store={store} state={store.getState()} addPost={store.addPost.bind(store)}
                 changeNewPost={store.changeNewPost.bind(store)} />
        </BrowserRouter>
        , document.getElementById('root'));
}


store.subscribe(rerenderEntireTree)
rerenderEntireTree();