import React from "react";
import s from "./MyPosts.module.css"
import { myPostsDataType} from "../../../../Redux/Store";

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
    addPost: (postText: string) => void
    messageForNewPost: string
    changeNewPost:(newText:string)=>void
}

export const MyPosts = (props: MyPostsPropsType) => {

    const postsElements = props.myPostsData.map(posts => <ItemPost key={posts.id}
                                                                   avatar={posts.avatar}
                                                                   message={posts.message}/>)

    let addPost = () => {
        props.addPost(props.messageForNewPost)
    }


    return (

        <div className={s.MyPosts}>

            <span>My posts</span>

            <div className={s.Text}>
                <textarea onChange={(e)=> {props.changeNewPost(e.currentTarget.value)}} value={props.messageForNewPost}/>
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


