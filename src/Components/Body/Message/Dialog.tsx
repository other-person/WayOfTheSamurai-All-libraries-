import React from "react";
import s from "./Dialog.module.css"
import {NavLink} from "react-router-dom";

type ItemPropsType = {
    id: string
    name: string
}
const Item = (props: ItemPropsType) => {
    return (
        <NavLink to={"/Messages/" + props.id} activeClassName={s.active}>{props.name}</NavLink>
    )
}
type DialogTextType = {
    message: string
}

const DialogText =( props: DialogTextType )=> {
    return(
        <li className={s.DialogItemText}>{props.message}</li>
    )
}
export const Dialog = () => {
    return (
        <div className={s.Dialog}>
            <div className={s.DialogItems}>
                <ul>
                    <li className={s.Item }>
                        <Item id="1" name="Sveta"/>
                    </li>
                    <li className={s.Item}>
                        <Item id="2" name="Vova"/>
                    </li>
                    <li className={s.Item}>
                        <Item id="3" name="Jeka"/>
                    </li>
                    <li className={s.Item}>
                        <Item id="4" name="Sergey"/>
                    </li>
                    <li className={s.Item}>
                        <Item id="5" name="Ivan"/>
                    </li>
                </ul>
            </div>

            <div className={s.DialogText}>
                <ul>
                    <DialogText message="Hello"/>
                    <DialogText message="How are you?"/>
                    <DialogText message="Tomorrow we go to the ZOO"/>
                    <DialogText message="Cool!!!"/>

                </ul>
            </div>

        </div>


    )
}