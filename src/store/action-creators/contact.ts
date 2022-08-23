import api from "../../api/database";
import {Dispatch} from "redux";
import {ContactAction, ContactActionType, IContact} from "../../types/contact";
import {v4 as uuidv4} from "uuid";


export const fetchContacts = () => {
    return async (dispatch: Dispatch<ContactAction>) => {
        try {
            const response = await api.get('/contacts');
            dispatch({type: ContactActionType.FETCH_CONTACTS, payload: response.data});
        } catch (e) {
            console.log(e)
        }
    }
}

export const addContact = (firstNameInput: string, lastNameInput: string) => {
    return async (dispatch: Dispatch<ContactAction>) => {
        try {
            const request = {
                id: uuidv4(),
                firstname: firstNameInput,
                lastname: lastNameInput,
            }

            const response = await api.post("/contacts", request);
            dispatch({type: ContactActionType.ADD_CONTACT, payload: response.data});
        } catch (e) {
            console.log(e)
        }
    }
}

export const deleteContact = (id: string) => {
    return async (dispatch: Dispatch<ContactAction>) => {
        try {
            await api.delete(`/contacts/${id}`);
            dispatch({type: ContactActionType.DELETE_CONTACT, payload: id});
        } catch (e) {
            console.log(e)
        }
    }
}

export const updateContact = (contact: IContact) => {
    return async (dispatch: Dispatch<ContactAction>) => {
        try {
            await api.put(`/contacts/${contact.id}`, contact);
            dispatch({type: ContactActionType.UPDATE_CONTACT, payload: contact});
        } catch (e) {
            console.log(e)
        }
    }
}

export const searchContacts = (value: string) => {
    return async (dispatch: Dispatch<ContactAction>) => {
        try {
            const response = await api.get(`/contacts?firstname_like=${value}`);
            dispatch({type: ContactActionType.SEARCH_CONTACTS, payload: response.data});
        } catch (e) {
            console.log(e)
        }
    }
}
