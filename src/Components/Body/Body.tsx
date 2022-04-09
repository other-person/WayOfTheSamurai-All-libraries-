import React from "react";
import s from "./Body.module.css"
import {Route} from "react-router-dom";
import {MainContent} from "./Maincontent/MainContent";
import {Navbar} from "./Navbar/Navbar";
import {Dialog} from "./Message/Dialog";
import {Music} from "./Music/Music";
import {News} from "./News/News";
import {Settings} from "./Settings/Settings";
import {
    dialogItemDataType,
    dialogTextDataType,
    myPostsDataType,
    rootStateType,
    storeType
} from "../../Redux/Store";

type BodyPropsType = {
    store: storeType
    state: rootStateType
    myPostsData: Array<myPostsDataType>
    dialogItemData: Array<dialogItemDataType>
    dialogsTextData: Array<dialogTextDataType>
    addPost: (postText: string) => void
    messageForNewPost: string
    changeNewPost: (newText: string) => void
}

export const Body = (props: BodyPropsType) => {

    return (

        <div className={s.Body}>

            <Navbar/>

            <Route path="/Profile" render={() => <MainContent
                myPostsData={props.store._state.myPostsDataPage.myPostsData}
                addPost={props.store.addPost.bind(props.store)}
                messageForNewPost={props.store._state.myPostsDataPage.messageForNewPost}
                changeNewPost={props.store.changeNewPost.bind(props.store)}
            />}/>

            <Route path="/Messages"
                   render={() => <Dialog
                       dialogItemData={props.store._state.dialogItemDataPage.dialogItemData}
                       dialogsTextData={props.dialogsTextData}/>}/>
            <Route path="/News" render={() => <News/>}/>
            <Route path="/Music" render={() => <Music/>}/>
            <Route path="/Settings" render={() => <Settings/>}/>
        </div>
    )
}