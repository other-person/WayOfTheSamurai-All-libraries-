import React from 'react';
import './App.css';
import {Header} from "./Components/Header/Header";
import {Body} from "./Components/Body/Body"

 function App() {
    return (
        <div className="App">
            <div className="Container">
                <Header/>
                <Body/>
            </div>
        </div>
    );
}
export default App;

