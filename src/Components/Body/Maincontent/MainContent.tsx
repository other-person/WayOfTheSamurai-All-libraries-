import React from "react";
import s from "./MainContent.module.css"
import {MyInfo} from "./MyInfo/MyInfo";
import {MyPosts} from "./MyPosts/MyPosts";
import {MyPostsDataType} from "../../../Redux/State";

type mainContentPropsType = {
    MyPostsData: Array<MyPostsDataType>

}

export const MainContent = (props: mainContentPropsType) => {

    return (
        <div className={s.MainContent}>
            <MyInfo/>
            <MyPosts MyPostsData={props.MyPostsData}/>
        </div>
    )
}