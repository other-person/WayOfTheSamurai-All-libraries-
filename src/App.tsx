import React from 'react';
import s from'./App.module.css';
import {Header} from "./Components/Header/Header";
import {Body} from "./Components/Body/Body";
import {rootStateType, storeType} from "./Redux/Store";

type AppPropsType = {
    store: storeType
    state: rootStateType
    addPost: (postText: string) => void
    changeNewPost: (newText: string)=>void
}
 function App (props: AppPropsType) {

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
                    addPost={props.store.addPost.bind(props.store)} // Функция добавления поста
                    messageForNewPost={props.store._state.myPostsDataPage.messageForNewPost} // Отображает введенне данные в инпуте
                    changeNewPost={props.store.changeNewPost.bind(props.store)}
                />

            </div>
        </div>
    );
}
export default App;

