import {v1} from "uuid";
import {ActionsType, myPostsDataPageType, myPostsDataType} from "./Store";


const myPostsReducer = (state: myPostsDataPageType, action: ActionsType) => {
    switch (action.type) {
        case  "ADD_POST":
            let newPost: myPostsDataType = {
                id: v1(),
                avatar: "Photo",
                message: action.postText
            };
            state.myPostsData.push(newPost)
            state.messageForNewPost = "";
            return state;

        case "CHANGE_NEW_POST":
            state.messageForNewPost = action.newText;
            return state;
        default:
            return state;
    }

}
export default myPostsReducer;


