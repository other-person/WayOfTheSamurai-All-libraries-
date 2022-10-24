import { combineReducers } from "@reduxjs/toolkit";
import { createStore } from "redux";
import dialogReducer from "./DialogReducer"
import myPostsReducer from "./MyPostReducer";


export let reducers = combineReducers({
    myPostsDataPage: myPostsReducer,
    dialogTextDataPage: dialogReducer
})

export let store = createStore (reducers)
