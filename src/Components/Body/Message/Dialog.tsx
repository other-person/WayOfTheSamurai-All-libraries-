import React from "react";
import s from "./Dialog.module.css"
import {NavLink} from "react-router-dom";
import {dialogItemDataType, dialogTextDataType, rootStateType, storeType} from "../../../Redux/Store";

type DialogType = {
    dialogItemData: Array<dialogItemDataType>
    dialogsTextData: Array<dialogTextDataType>

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

    let DialogItems = props.dialogItemData.map(dialog => <Item key={dialog.id} id={dialog.id} name={dialog.name}/>)
    let DialogContent = props.dialogsTextData.map(text => <DialogText message={text.message}/>)

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