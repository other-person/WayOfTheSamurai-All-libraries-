import {v1} from "uuid";
import {ActionsType, dialogTextDataPageType} from "./Store";


const dialogReducer = (state: dialogTextDataPageType, action: ActionsType ) => {
     switch (action.type) {

         case  "ADD_DIALOG_MESSAGE":
             let newDialog = {
                 id: v1(),
                 message: action.dialogMessage
             }
             state.dialogTextData.push(newDialog)
             state.messageForDialogs = "";
             return state;
         case "CHANGE_DIALOG_MESSAGE":
             state.messageForDialogs = action.newMessage;
             return state;
         default:
             return state;
     }
 }
export default dialogReducer;