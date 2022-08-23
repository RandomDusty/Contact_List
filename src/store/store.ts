import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";
import {contactReducer} from "./reducers/contactReducer";
import {rootReducer} from "./reducers";

export const store = createStore(rootReducer, applyMiddleware(thunk));