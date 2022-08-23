export interface IContact {
    id: string;
    firstname: string;
    lastname: string;
}

export interface ContactState {
    contacts: IContact[];
}


export enum ContactActionType {
    FETCH_CONTACTS = 'FETCH_CONTACTS',
    ADD_CONTACT = 'ADD_CONTACT',
    DELETE_CONTACT = 'DELETE_CONTACT',
    UPDATE_CONTACT = 'UPDATE_CONTACT',
    SEARCH_CONTACTS = 'SEARCH_CONTACTS'
}

interface FETCH_CONTACTS  {
    type:ContactActionType.FETCH_CONTACTS,
    payload: IContact[]
}

interface ADD_CONTACT  {
    type:ContactActionType.ADD_CONTACT,
    payload: IContact
}

interface DELETE_CONTACT  {
    type:ContactActionType.DELETE_CONTACT,
    payload: string
}

interface UPDATE_CONTACT {
    type:ContactActionType.UPDATE_CONTACT,
    payload: IContact
}

interface SEARCH_CONTACTS {
    type:ContactActionType.SEARCH_CONTACTS,
    payload: IContact[]
}

export type ContactAction = FETCH_CONTACTS
    | ADD_CONTACT
    | DELETE_CONTACT
    | UPDATE_CONTACT
    | SEARCH_CONTACTS



