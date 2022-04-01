import React from "react";
import s from "./Body.module.css"
import {BrowserRouter, Route} from "react-router-dom";
import {MainContent} from "./Maincontent/MainContent";
import {Navbar} from "./Navbar/Navbar";
import {Dialog} from "./Message/Dialog";
import {Music} from "./Music/Music";
import {News} from "./News/News";
import {Settings} from "./Settings/Settings";
import {changeNewText, dialogItemDataType, dialogTextDataType, myPostsDataType, rootStateType} from "../../Redux/State";

type BodyPropsType = {
    state: rootStateType
    myPostsData: Array<myPostsDataType>
    dialogItemData: Array<dialogItemDataType>
    dialogsTextData: Array<dialogTextDataType>
    addPost: (postText: string) => void
    messageForNewPost: string
    changeNewPost:(newText:string)=>void
}

export const Body = (props: BodyPropsType) => {

    return (

        <div className={s.Body}>

            <Navbar/>

            <Route path="/Profile" render={() => <MainContent
                myPostsData={props.state.myPostsDataPage.myPostsData}
                addPost={props.addPost}
                messageForNewPost = {props.state.myPostsDataPage.messageForNewPost}
                changeNewPost = {changeNewText}
            />}/>
            <Route path="/Messages"
                   render={() => <Dialog
                       dialogItemData={props.state.dialogItemDataPage.dialogItemData}
                       dialogsTextData={props.dialogsTextData}/>}/>
            <Route path="/News" render={() => <News/>}/>
            <Route path="/Music" render={() => <Music/>}/>
            <Route path="/Settings" render={() => <Settings/>}/>


        </div>

    )
}