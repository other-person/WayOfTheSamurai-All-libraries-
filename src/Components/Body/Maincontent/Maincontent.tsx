import React from "react";
import s from"./Maincontent.module.css"
import {MyInfo} from "./MyInfo/MyInfo";
import {MyPosts} from "./MyPosts/MyPosts";

export const Maincontent = () => {
    return (
        <div className={s.Maincontent}>
            <MyInfo/>
            <MyPosts/>
        </div>
    )
}