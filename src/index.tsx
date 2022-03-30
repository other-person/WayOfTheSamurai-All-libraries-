import ReactDOM from 'react-dom';
import React from "react";
import './index.css';
import App from './App';
import {state} from "./Redux/State";

ReactDOM.render(<App state={state}/>, document.getElementById('root'));

