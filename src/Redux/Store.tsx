import React from "react";
import {v1} from "uuid";


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
    id: string
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
    messageForDialogs: string
}

export type rootStateType = {
    myPostsDataPage: myPostsDataPageType
    dialogItemDataPage: dialogItemDataPageType
    dialogTextDataPage: DialogTextDataPageType
}

export type StoreType = {
    _state: rootStateType
    subscribe: (observer: () => void) => void
    _rerenderEntireTree: () => void
    getState: () => rootStateType
    dispatch: (action:
                   ReturnType<typeof addPostAC> |
                   ReturnType<typeof changeNewPostAC> |
                   ReturnType<typeof addDialogMessageAC>|
                   ReturnType<typeof changeDialogPostAC>
    ) => void
}

export const addPostAC = (PostText: string) => {
    return {
        type: "ADD_POST",
        postText: PostText
    } as const; //воспринимай как константу
}
export const changeNewPostAC = (NewText: string) => {
    return {
        type: "CHANGE_NEW_POST",
        newText: NewText
    } as const; //воспринимай как константу
}
export const addDialogMessageAC = (DialogMessage: string) => {
    return {
        type: "ADD_DIALOG_MESSAGE",
        dialogMessage: DialogMessage
    } as const; //воспринимай как константу
}
export const changeDialogPostAC = (NewMessage: string) => {
    return {
        type: "CHANGE_DIALOG_MESSAGE",
        newMessage: NewMessage
    } as const; //воспринимай как константу
}

export let store: StoreType = {
    _state: {
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
            messageForDialogs: "",
            dialogTextData: [
                {id: v1(), message: "Hello"},
                {id: v1(), message: "How are you?"},
                {id: v1(), message: "Tomorrow we go to the ZOO"},
                {id: v1(), message: "Cool!!!"}
            ]
        },

    },
    _rerenderEntireTree() {
        console.log("State changed")
    },
    subscribe(observer) {
        this._rerenderEntireTree = observer;
    },
    //метод, который возвращает state
    getState() {
        return this._state
    },

    dispatch(action:
                 ReturnType<typeof addPostAC> |
                 ReturnType<typeof changeNewPostAC> |
                 ReturnType<typeof addDialogMessageAC> |
                 ReturnType<typeof changeDialogPostAC>
    ) {

        if (action.type === "ADD_POST") {
            let newPost: myPostsDataType = {
                id: v1(),
                avatar: "Photo",
                message: action.postText
            }
            this._state.myPostsDataPage.myPostsData.push(newPost)
            this._state.myPostsDataPage.messageForNewPost = "";
            this._rerenderEntireTree();

        } else if (action.type === "CHANGE_NEW_POST") {
            this._state.myPostsDataPage.messageForNewPost = action.newText;
            this._rerenderEntireTree();

        } else if (action.type === "ADD_DIALOG_MESSAGE") {
            let newDialog: dialogTextDataType = {
                id: v1(),
                message: action.dialogMessage
            }
            this._state.dialogTextDataPage.dialogTextData.push(newDialog)
            this._state.dialogTextDataPage.messageForDialogs = "";
            this._rerenderEntireTree();

        } else if (action.type === "CHANGE_DIALOG_MESSAGE") {
            this._state.dialogTextDataPage.messageForDialogs = action.newMessage;
            this._rerenderEntireTree();

        }

    }
}
