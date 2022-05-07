import React from 'react';
import s from './App.module.css';
import {Header} from "./Components/Header/Header";
import {Body} from "./Components/Body/Body";
import {
    addDialogMessageAC,
    addPostAC, changeDialogPostAC,
    changeNewPostAC,
    rootStateType, store,
    StoreType
} from "./Redux/Store";

type AppPropsType = {
    store: StoreType
    state: rootStateType
    messageForNewPost: string
    messageForDialogs: string
    dispatch: (action:
                   ReturnType<typeof addPostAC> |
                   ReturnType<typeof changeNewPostAC> |
                   ReturnType<typeof addDialogMessageAC> |
                   ReturnType<typeof changeDialogPostAC>
    ) => void
}

function App(props: AppPropsType) {

    return (
        <div className={s.App}>
            <div className={s.Container}>
                <Header/>
                <Body
                    store={props.store}
                    state={props.store.getState()}
                    myPostsData={props.store._state.myPostsDataPage.myPostsData} // - Данные постов стены в сторе/стейте
                    dialogItemData={props.store._state.dialogItemDataPage.dialogItemData} // - Данные в сторе/стейте тех, кто переписывается
                    dialogsTextData={props.store._state.dialogTextDataPage.dialogTextData}// - Данные в сторе/стейте самих диалогов
                    dispatch={props.store.dispatch.bind(props.store)}
                    messageForNewPost={props.store._state.myPostsDataPage.messageForNewPost} // Отображает введенне данные в инпуте
                    messageForDialogs={props.store._state.dialogTextDataPage.messageForDialogs}
                />

            </div>
        </div>
    );
}

export default App;

