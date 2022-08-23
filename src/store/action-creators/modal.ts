import {ModalAction, ModalActionType} from "../../types/modal";


export const setActive = (active: boolean): ModalAction => {
    return {type: ModalActionType.SET_ACTIVE, payload: active}
}

export const setUpdateID = (update: string): ModalAction => {
    return {type: ModalActionType.SET_UPDATE, payload: update}
}

export const setFirstInput = (val: string): ModalAction => {
    return {type: ModalActionType.SET_FIST_NAME_INPUT, payload: val}
}

export const setLastInput = (val: string): ModalAction => {
    return {type: ModalActionType.SET_LAST_NAME_INPUT, payload: val}
}