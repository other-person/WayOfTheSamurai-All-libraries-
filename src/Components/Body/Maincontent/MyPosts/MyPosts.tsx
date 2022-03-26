import React from "react";
import s from "./MyPosts.module.css"

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
                    <img src="http://www.olofmp3.ru/images_open/mikhailglinka.jpg" alt=""/> <p>Hi all!</p>
                </div>

                <div className={s.Item}>
                    <img src="https://www.olofmp3.ru/images_open/skryabin.jpg" alt=""/> <p>Privet gospoda!</p>
                </div>

                <div className={s.Item}>
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAHElpwk1RTSPjXLZbQSq2ubcBBftpm64B-w&usqp=CAU"
                        alt=""/> <p>Hi people!</p>
                </div>

                <div className={s.Item}>
                    <img src="http://www.olofmp3.ru/images_open/stravinsky.jpg" alt=""/><p>Yo Yo Yo!</p>
                </div>

            </div>
        </div>


    )
}


