import {ModalAction, ModalActionType, ModalState} from "../../types/modal";

const initialState: ModalState = {
    active: false,
    updateID: '',
    firstNameInput: '',
    lastNameInput: ''
}

export const modalReducer = (state = initialState, action: ModalAction): ModalState => {
    switch (action.type) {
        case ModalActionType.SET_ACTIVE :
            return {...state, active: action.payload}
        case ModalActionType.SET_UPDATE :
            return {...state, updateID: action.payload}
        case ModalActionType.SET_FIST_NAME_INPUT :
            return {...state, firstNameInput: action.payload}
        case ModalActionType.SET_LAST_NAME_INPUT :
            return {...state, lastNameInput: action.payload}
        default:
            return state
    }
}