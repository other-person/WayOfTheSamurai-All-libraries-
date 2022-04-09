import React from "react";
import s from "./MainContent.module.css"
import {MyInfo} from "./MyInfo/MyInfo";
import {MyPosts} from "./MyPosts/MyPosts";
import { myPostsDataType} from "../../../Redux/Store";

type MainContentPropsType = {

    myPostsData: Array<myPostsDataType>
    addPost: (postText: string) => void
    messageForNewPost: string
    changeNewPost:(newText:string)=>void
}

export const MainContent = (props: MainContentPropsType) => {

    return (
        <div className={s.MainContent}>
            <MyInfo/>
            <MyPosts myPostsData={props.myPostsData}
                     addPost={props.addPost}
                     messageForNewPost = {props.messageForNewPost}
                     changeNewPost={props.changeNewPost}
            />


        </div>
    )
}