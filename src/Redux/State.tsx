import React from "react";
import {v1} from "uuid";

let rerenderEntireTree = ()=> {
    console.log("Hello")
}

export type myPostsDataType = {
    id: string
    avatar: string
    message: string
}

export type dialogItemDataType = {
    id: string
    name: string
}

export type dialogTextDataType = {
    message: string
}

export type dialogItemDataPageType = {
    dialogItemData: Array<dialogItemDataType>
}
export type myPostsDataPageType = {
    myPostsData: Array<myPostsDataType>
    messageForNewPost: string
}
export type DialogTextDataPageType = {
    dialogTextData: Array<dialogTextDataType>
}

export type rootStateType = {
    myPostsDataPage: myPostsDataPageType
    dialogItemDataPage: dialogItemDataPageType
    dialogTextDataPage: DialogTextDataPageType
}

export let state: rootStateType = {

    myPostsDataPage: {
        messageForNewPost: "",
        myPostsData: [
            {id: v1(), avatar: "http://www.olofmp3.ru/images_open/mikhailglinka.jpg", message: "Hi all!"},
            {id: v1(), avatar: "https://www.olofmp3.ru/images_open/skryabin.jpg", message: "Privet gospoda!"},
            {
                id: v1(),
                avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAHElpwk1RTSPjXLZbQSq2ubcBBftpm64B-w&usqp=CAU",
                message: "Hi people!"
            },
            {id: v1(), avatar: "http://www.olofmp3.ru/images_open/stravinsky.jpg", message: "Yo Yo Yo!"}
        ],
    },
    dialogItemDataPage: {
        dialogItemData: [
            {id: v1(), name: "Sveta"},
            {id: v1(), name: "Vova"},
            {id: v1(), name: "Jeka"},
            {id: v1(), name: "Sergey"},
            {id: v1(), name: "Ivan"}
        ]
    },

    dialogTextDataPage: {
        dialogTextData: [
            {message: "Hello"},
            {message: "How are you?"},
            {message: "Tomorrow we go to the ZOO"},
            {message: "Cool!!!"}
        ]
    },

}

export let addPost = (postText: string) => {
    let newPost: myPostsDataType = {
        id: v1(),
        avatar: "Photo",
        message: postText
    }
    state.myPostsDataPage.myPostsData.push(newPost)
    rerenderEntireTree();
}


export let changeNewText= (newText:  string) => {
    state.myPostsDataPage.messageForNewPost = newText;
    rerenderEntireTree();
}
export const subscribe = (observer:()=>void) => {
    rerenderEntireTree = observer;
}
