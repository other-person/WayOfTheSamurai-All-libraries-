import React from "react";
import s from "./MainContent.module.css"
import {MyInfo} from "./MyInfo/MyInfo";
import {MyPosts} from "./MyPosts/MyPosts";
import {
    addPostAC,
    changeNewPostAC,
    myPostsDataType,
} from "../../../Redux/Store";

type MainContentPropsType = {
    myPostsData: Array<myPostsDataType>
    messageForNewPost: string
    dispatch: (action:
                   ReturnType<typeof addPostAC> |
                   ReturnType<typeof changeNewPostAC>
    ) => void

}

export const MainContent = (props: MainContentPropsType) => {

    return (
        <div className={s.MainContent}>
            <MyInfo/>
            <MyPosts myPostsData={props.myPostsData}
                     dispatch={props.dispatch}
                     messageForNewPost={props.messageForNewPost}
            />


        </div>
    )
}