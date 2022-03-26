import React from "react";
import s from "./Body.module.css"
import {Maincontent} from "./Maincontent/Maincontent";
import {Navbar} from "./Navbar/Navbar";

export const Body = () => {
    return (
        <div className={s.Body}>
            <Navbar/>
            <Maincontent/>
        </div>
    )
}