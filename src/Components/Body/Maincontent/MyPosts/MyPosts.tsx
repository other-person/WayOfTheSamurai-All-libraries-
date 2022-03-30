import React from "react";
import s from "./MyPosts.module.css"
import {MyPostsDataType} from "../../../../Redux/State";

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
type myPostsType = {
    MyPostsData: Array<MyPostsDataType>
}

export const MyPosts = (props: myPostsType) => {

    const PostsElements = props.MyPostsData.map(posts => <ItemPost avatar={posts.avatar} message={posts.message}/>)

    let newPostElement = React.createRef();

    let addPost = () => {

        let text = newPostElement.current.value
        alert(text)
    }
    return (

        <div className={s.MyPosts}>

            <span>My posts</span>

            <div className={s.Text}>
                <textarea ref={newPostElement}></textarea>
            </div>
    <div className={s.Button}>
        <button onClick={addPost}>Send</button>
    </div>

    <div className={s.Posts}>

        <div className={s.Item}>

            {PostsElements}

        </div>
    </div>
</div>
)
}


