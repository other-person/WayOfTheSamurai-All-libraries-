import React from "react";
import s from "./Navbar.module.css"

export const Navbar = () => {
    return (
        <div className={s.Navbar}>
            <div className={s.Wrapper_Navbar}>
                <div className={s.Item}><a href="">Profile</a></div>
                <div className={s.Item}><a href="">Messages</a></div>
                <div className={s.Item}><a href="">News</a></div>
                <div className={s.Item}><a href="">Music</a></div>
                <div className={s.Item}><a href="">Settings</a></div>
            </div>
        </div>
    )
}