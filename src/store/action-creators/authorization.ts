import {AuthorizationAction, AuthorizationActionType} from "../../types/authorization";


export const setIsAuth = (isAuth: string): AuthorizationAction => {
    localStorage.setItem('isAuth', isAuth);
    return {type: AuthorizationActionType.SET_IS_AUTH, payload: isAuth}
}
