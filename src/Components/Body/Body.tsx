import React from "react";
import s from "./Body.module.css"
import {BrowserRouter, Route} from "react-router-dom";
import {MainContent} from "./Maincontent/MainContent";
import {Navbar} from "./Navbar/Navbar";
import {Dialog} from "./Message/Dialog";
import {Music} from "./Music/Music";
import {News} from "./News/News";
import {Settings} from "./Settings/Settings";
import {DialogItemDataType, DialogTextDataType, MyPostsDataType, rootStateType} from "../../Redux/State";

type BodyPropsType = {
    state: rootStateType
    MyPostsData: Array<MyPostsDataType>
    DialogItemData: Array<DialogItemDataType>
    DialogsTextData: Array<DialogTextDataType>
}

export const Body = (props: BodyPropsType) => {

    return (
        <BrowserRouter>
            <div className={s.Body}>

                <Navbar/>

                <Route path="/Profile" render={() => <MainContent MyPostsData={props.state.MyPostsDataPage.MyPostsData}/>}/>
                <Route path="/Messages"
                       render={() => <Dialog
                           DialogItemData={props.state.DialogItemDataPage.DialogItemData}
                           DialogsTextData={props.DialogsTextData}/>}/>
                <Route path="/News" render={() => <News/>}/>
                <Route path="/Music" render={() => <Music/>}/>
                <Route path="/Settings" render={() => <Settings/>}/>


            </div>
        </BrowserRouter>
    )
}