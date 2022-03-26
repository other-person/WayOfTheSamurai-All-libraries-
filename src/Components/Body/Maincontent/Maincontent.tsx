import React from "react";
import "./Maincontent.css"
import {MyInfo} from "./MyInfo/MyInfo";
import {MyPosts} from "./MyPosts/MyPosts";

export const Maincontent = () => {
    return (
        <div className="Maincontent">
            <MyInfo/>
            <MyPosts/>
        </div>
    )
}