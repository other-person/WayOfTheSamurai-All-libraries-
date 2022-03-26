import React from "react";
import s from"./Header.module.css"


export const Header = () => {
    return (
        <div className={s.Header}>
            <div className={s.Logo}>
                <img src="https://i.pinimg.com/550x/48/cc/88/48cc88fb0121fddea878359f66c03c91.jpg" alt="Logo"/>


            </div>
            <div className={s.DescriptionSite}>
                <span>Old friends</span>

            </div>
        </div>
    )
}