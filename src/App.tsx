import React from 'react';
import s from'./App.module.css';
import {Header} from "./Components/Header/Header";
import {Body} from "./Components/Body/Body";
import {rootStateType} from "./Redux/State";

type AppPropsType = {
    state: rootStateType
}

 function App (props: AppPropsType) {

    return (
        <div className={s.App}>
            <div className={s.Container}>
                <Header/>
                <Body
                    state={props.state}
                    MyPostsData={props.state.MyPostsDataPage.MyPostsData}
                    DialogItemData={props.state.DialogItemDataPage.DialogItemData}
                    DialogsTextData={props.state.DialogTextDataPage.DialogTextData}
                />

            </div>
        </div>
    );
}
export default App;

