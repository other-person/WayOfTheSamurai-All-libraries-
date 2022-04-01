import React from 'react';
import s from'./App.module.css';
import {Header} from "./Components/Header/Header";
import {Body} from "./Components/Body/Body";
import {changeNewText, rootStateType} from "./Redux/State";


type AppPropsType = {
    state: rootStateType
    addPost: (postText:string)=>void
}

 function App (props: AppPropsType) {

    return (
        <div className={s.App}>
            <div className={s.Container}>
                <Header/>
                <Body
                    state={props.state}
                    myPostsData={props.state.myPostsDataPage.myPostsData} // - Данные постов стены в стейте
                    dialogItemData={props.state.dialogItemDataPage.dialogItemData} // - Данные в стейте тех, кто переписывается
                    dialogsTextData={props.state.dialogTextDataPage.dialogTextData}// - Данные в стейте самих диалогов
                    addPost={props.addPost} // Функция добавления поста
                    messageForNewPost={props.state.myPostsDataPage.messageForNewPost} // Отображает введенне данные в инпуте
                    changeNewPost={changeNewText}
                />

            </div>
        </div>
    );
}
export default App;

