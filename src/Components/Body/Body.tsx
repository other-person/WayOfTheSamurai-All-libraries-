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
    addDialogMessageAC,
    addPostAC, changeDialogPostAC,
    changeNewPostAC,
    dialogItemDataType,
    dialogTextDataType,
    myPostsDataType,
    rootStateType,
    StoreType
} from "../../Redux/Store";

type BodyPropsType = {
    store: StoreType
    state: rootStateType
    myPostsData: Array<myPostsDataType>
    dialogItemData: Array<dialogItemDataType>
    dialogsTextData: Array<dialogTextDataType>
    messageForNewPost: string
    messageForDialogs: string
    dispatch: (action:
                   ReturnType<typeof addPostAC> |
                   ReturnType<typeof changeNewPostAC> |
                   ReturnType<typeof addDialogMessageAC> |
                   ReturnType<typeof changeDialogPostAC>
    ) => void
}

export const Body = (props: BodyPropsType) => {

    return (

        <div className={s.Body}>

            <Navbar/>

            <Route path="/Profile" render={() => <MainContent
                myPostsData={props.store._state.myPostsDataPage.myPostsData}
                messageForNewPost={props.messageForNewPost}
                dispatch={props.dispatch}
            />}/>

            <Route path="/Messages"
                   render={() => <Dialog
                       messageForDialogs={props.store._state.dialogTextDataPage.messageForDialogs}
                       dialogItemData={props.store._state.dialogItemDataPage.dialogItemData}
                       dialogsTextData={props.dialogsTextData}
                       dispatch={props.dispatch}
                   />
                   }/>
            <Route path="/News" render={() => <News/>}/>
            <Route path="/Music" render={() => <Music/>}/>
            <Route path="/Settings" render={() => <Settings/>}/>
        </div>
    )
}