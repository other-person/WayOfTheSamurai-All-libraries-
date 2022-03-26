import React from "react";
import "./Body.css"
import {Maincontent} from "./Maincontent/Maincontent";
import {Navbar} from "./Navbar/Navbar";

export const Body = () => {
    return (
        <div className="Body">
            <Navbar/>
            <Maincontent/>
        </div>
    )
}