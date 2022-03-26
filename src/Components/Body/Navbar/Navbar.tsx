import React from "react";
import s from "./Navbar.module.css"
import {NavLink} from "react-router-dom";

export const Navbar = () => {
    return (
        <div className={s.Navbar}>
            <div className={s.Wrapper_Navbar}>
                <div className={s.Item}><NavLink to="/Profile" activeClassName={s.active}>Profile</NavLink></div>
                <div className={s.Item}><NavLink to="/Messages" activeClassName={s.active}>Messages</NavLink></div>
                <div className={s.Item}><NavLink to="/News" activeClassName={s.active}>News</NavLink></div>
                <div className={s.Item}><NavLink to="/Music" activeClassName={s.active}>Music</NavLink></div>
                <div className={s.Item}><NavLink to="/Settings" activeClassName={s.active}>Settings</NavLink></div>
            </div>
        </div>
    )
}