import React from "react";
import {v1} from "uuid";

export type MyPostsDataType = {
    id: string
    avatar: string
    message: string
}

export type DialogItemDataType = {
    id: string
    name: string
}

export type DialogTextDataType = {
    message: string
}
export type DialogItemDataPageType = {
    DialogItemData: Array<DialogItemDataType>
}
export type myPostsDataPageType = {
    MyPostsData: Array<MyPostsDataType>
}
export type DialogTextDataPageType = {
    DialogTextData: Array<DialogTextDataType>
}

export type rootStateType = {
    MyPostsDataPage: myPostsDataPageType
    DialogItemDataPage: DialogItemDataPageType
    DialogTextDataPage: DialogTextDataPageType
}

export let state: rootStateType = {

    MyPostsDataPage: {
        MyPostsData: [
            {id: v1(), avatar: "http://www.olofmp3.ru/images_open/mikhailglinka.jpg", message: "Hi all!"},
            {id: v1(), avatar: "https://www.olofmp3.ru/images_open/skryabin.jpg", message: "Privet gospoda!"},
            {
                id: v1(),
                avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAHElpwk1RTSPjXLZbQSq2ubcBBftpm64B-w&usqp=CAU",
                message: "Hi people!"
            },
            {id: v1(), avatar: "http://www.olofmp3.ru/images_open/stravinsky.jpg", message: "Yo Yo Yo!"}
        ]
    },
    DialogItemDataPage: {
        DialogItemData: [
            {id: v1(), name: "Sveta"},
            {id: v1(), name: "Vova"},
            {id: v1(), name: "Jeka"},
            {id: v1(), name: "Sergey"},
            {id: v1(), name: "Ivan"}
        ]
    },

    DialogTextDataPage: {
        DialogTextData: [
            {message: "Hello"},
            {message: "How are you?"},
            {message: "Tomorrow we go to the ZOO"},
            {message: "Cool!!!"}
        ]
    }
}

