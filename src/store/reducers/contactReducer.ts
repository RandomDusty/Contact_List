import {ContactAction, ContactActionType, ContactState} from "../../types/contact";

const initialState: ContactState = {
    contacts: [],
}

export const contactReducer = (state = initialState, action: ContactAction): ContactState => {
    switch (action.type) {
        case ContactActionType.FETCH_CONTACTS :
            return {contacts: action.payload}
        case ContactActionType.ADD_CONTACT :
            return {contacts: [...state.contacts, action.payload]}
        case ContactActionType.DELETE_CONTACT :
            return {contacts: state.contacts.filter(contact => contact.id !== action.payload)}
        case ContactActionType.UPDATE_CONTACT :
            return {contacts: state.contacts.map(contact => contact.id === action.payload.id ? action.payload : contact)}
        case ContactActionType.SEARCH_CONTACTS :
            return {contacts: action.payload}
        default:
            return state
    }
}