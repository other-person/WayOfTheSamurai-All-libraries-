import React, {ChangeEvent} from "react";
import s from "./MyPosts.module.css"
import {
    addPostAC,
    changeNewPostAC,
    myPostsDataType
} from "../../../../Redux/Store";

type ItemPostPropsType = {
    avatar: string
    message: string
}

const ItemPost = (props: ItemPostPropsType) => {

    return (
        <div className={s.Item}>
            <img src={props.avatar} alt=""/> <p>{props.message}</p>
        </div>
    );
}
type MyPostsPropsType = {
    myPostsData: Array<myPostsDataType>
    messageForNewPost: string
    dispatch: (action: ReturnType<typeof addPostAC> | ReturnType<typeof changeNewPostAC>) => void

}

export const MyPosts = (props: MyPostsPropsType) => {

    const postsElements = props.myPostsData.map(posts => <ItemPost key={posts.id}
                                                                   avatar={posts.avatar}
                                                                   message={posts.message}/>)

    let addPost = () => {
        //props.addPost(props.messageForNewPost)
        props.dispatch( {type: "ADD-POST", postText: props.messageForNewPost})
    };

    let newTextChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch({type: "CHANGE-NEW-POST", newText: props.messageForNewPost})
      // let text = props.changeNewPost(e.currentTarget.value)
    };

    return (

        <div className={s.MyPosts}>

            <span>My posts</span>

            <div className={s.Text}>
                <textarea onChange={(e) => {newTextChangeHandler}} value={props.messageForNewPost}/>

            </div>
            <div className={s.Button}>
                <button onClick={addPost}>Send</button>
            </div>

            <div className={s.Posts}>
                <div className={s.Item}>

                    {postsElements}

                </div>
            </div>
        </div>
    )
}


