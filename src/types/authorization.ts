export interface AuthorizationState {
    isAuth: string | null;
}

export enum AuthorizationActionType{
    SET_IS_AUTH = 'SET_IS_AUTH'
}

interface SET_IS_AUTH {
    type: AuthorizationActionType.SET_IS_AUTH,
    payload: string
}

export type AuthorizationAction = SET_IS_AUTH