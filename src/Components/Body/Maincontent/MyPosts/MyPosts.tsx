import React from "react";
import s from "./MyPosts.module.css"

type ItemPostPropsType = {
    photo: string
    message: string
}
const ItemPost = (props: ItemPostPropsType) => {
    return (
        <div className={s.Item}>
            <img src={props.photo} alt=""/> <p>{props.message}</p>
        </div>
    )
}
export const MyPosts = () => {
    return (
        <div className={s.MyPosts}>
            <span>My posts</span>

            <div className={s.Text}>
                <textarea></textarea>
            </div>
            <div className={s.Button}>
                <button>Send</button>
            </div>

            <div className={s.Posts}>
                <div className={s.Item}>
                    <ItemPost photo="http://www.olofmp3.ru/images_open/mikhailglinka.jpg" message="Hi all!"/>
                </div>

                <div className={s.Item}>
                    <ItemPost photo="https://www.olofmp3.ru/images_open/skryabin.jpg" message="Privet gospoda!"/>

                </div>

                <div className={s.Item}>
                    <ItemPost photo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAHElpwk1RTSPjXLZbQSq2ubcBBftpm64B-w&usqp=CAU" message="Hi people!"/>
                </div>

                <div className={s.Item}>
                    <ItemPost photo="http://www.olofmp3.ru/images_open/stravinsky.jpg" message="Yo Yo Yo!"/>
                </div>

            </div>
        </div>


    )
}


