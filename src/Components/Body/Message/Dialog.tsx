import React from "react";
import s from "./Dialog.module.css"
import {NavLink} from "react-router-dom";
import {DialogItemDataType, DialogTextDataType} from "../../../Redux/State";

type DialogType = {
    DialogItemData: Array<DialogItemDataType>
    DialogsTextData: Array<DialogTextDataType>
}
type DialogItemType = {
    id: string
    name: string
}
type DialogTextType = {
    message: string
}

const Item = (props: DialogItemType) => {
    return (
        <li className={s.Item}>
            <NavLink to={"/Messages/" + props.id} activeClassName={s.active}>{props.name}</NavLink>
        </li>
    )
}

const DialogText = (props: DialogTextType) => {
    return (
        <li className={s.DialogItemText}>{props.message}</li>
    )
}

export const Dialog = (props: DialogType) => {

    let DialogItems = props.DialogItemData.map(dialog => <Item id={dialog.id} name={dialog.name}/>)
    let DialogContent = props.DialogsTextData.map(text => <DialogText message={text.message}/>)

    return (
        <div className={s.Dialog}>
            <div className={s.DialogItems}>
                <ul>
                    <li className={s.Item}>
                        {DialogItems}
                    </li>
                </ul>
            </div>

            <div className={s.DialogText}>
                <ul>
                    {DialogContent}
                </ul>
            </div>

        </div>


    )
}