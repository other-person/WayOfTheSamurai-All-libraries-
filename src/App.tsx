import React from 'react';
import s from'./App.module.css';
import {Header} from "./Components/Header/Header";
import {Body} from "./Components/Body/Body"

 function App() {
    return (
        <div className={s.App}>
            <div className={s.Container}>
                <Header/>
                <Body/>
            </div>
        </div>
    );
}
export default App;

