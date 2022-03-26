import React from "react";
import s from "./Body.module.css"
import {Maincontent} from "./Maincontent/Maincontent";
import {Navbar} from "./Navbar/Navbar";
import {Dialog} from "./Message/Dialog";
import {BrowserRouter, Route} from "react-router-dom";
import {Music} from "./Music/Music";
import {News} from "./News/News";
import {Settings} from "./Settings/Settings";


export const Body = () => {
    debugger
    return (
        <BrowserRouter>
            <div className={s.Body}>

                <Navbar/>

                <Route path="/Profile" component={Maincontent}/>
                <Route path="/Messages" component={Dialog}/>
                <Route path="/News" component={News}/>
                <Route path="/Music" component={Music}/>
                <Route path="/Settings" component={Settings}/>


            </div>
        </BrowserRouter>
    )
}