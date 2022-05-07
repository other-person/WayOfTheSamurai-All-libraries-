import React from "react";
import s from"./MyInfo.module.css"

export const MyInfo = () => {
    return (
        <div className={s.MyInfo}>
            <div className={s.WrapperMyInfo}>
                <div className={s.MyLogo}>
                    <img src="https://avatars.mds.yandex.net/get-zen_doc/927575/pub_5d5a70db44742600ad5c03c3_5d5a72cc1d656a00ad1f3ec0/scale_1200" alt="Ava"/>

                </div>
                <div className={s.MyDescription}>
                    <span>Taras Bazhenka</span>
                    <span>Date of Birth: 13.08.87</span>
                    <span>City: Minsk</span>
                    <span>Education: MGPT</span>
                </div>

            </div>

        </div>
    )
}
