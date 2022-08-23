import {combineReducers} from "redux";
import {contactReducer} from "./contactReducer";
import {modalReducer} from "./modalReducer";
import {authorizationReducer} from "./authorizationReducer";

export const rootReducer = combineReducers({
    contacts: contactReducer,
    modal: modalReducer,
    authorization: authorizationReducer
})

export type RootState = ReturnType<typeof rootReducer>