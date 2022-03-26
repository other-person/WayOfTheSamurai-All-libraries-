import React from "react";
import "./MyPosts.css"

export const MyPosts = () => {
    return (
        <div className="MyPosts">
            <span>My posts</span>

            <div className="Text">
                <textarea></textarea>
            </div>
            <div className="Button">
                <button>Send</button>
            </div>

        </div>
    )
}


