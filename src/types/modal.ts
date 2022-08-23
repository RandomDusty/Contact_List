import {IContact} from "./contact";

export interface ModalState {
    active: boolean,
    updateID: string,
    firstNameInput: string,
    lastNameInput: string
}

export enum ModalActionType {
    SET_ACTIVE = 'SET_ACTIVE',
    SET_UPDATE = 'SET_UPDATE',
    SET_FIST_NAME_INPUT = 'SET_FIST_NAME_INPUT',
    SET_LAST_NAME_INPUT = 'SET_LAST_NAME_INPUT'
}

interface SET_ACTIVE  {
    type:ModalActionType.SET_ACTIVE,
    payload: boolean
}

interface SET_UPDATE  {
    type:ModalActionType.SET_UPDATE,
    payload: string
}

interface SET_FIST_NAME_INPUT  {
    type:ModalActionType.SET_FIST_NAME_INPUT,
    payload: string
}

interface SET_LAST_NAME_INPUT  {
    type:ModalActionType.SET_LAST_NAME_INPUT,
    payload: string
}

export type ModalAction = SET_ACTIVE
    | SET_UPDATE
    | SET_FIST_NAME_INPUT
    | SET_LAST_NAME_INPUT