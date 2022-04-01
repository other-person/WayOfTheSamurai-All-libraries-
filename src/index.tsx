import ReactDOM from 'react-dom';
import React from "react";
import './index.css';
import App from './App';
import {state, addPost, rootStateType} from "./Redux/State";
import {BrowserRouter} from "react-router-dom";
import {subscribe} from "./Redux/State";




 let rerenderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} addPost={addPost} />
        </BrowserRouter>
        , document.getElementById('root'));
}
rerenderEntireTree();

subscribe(rerenderEntireTree)