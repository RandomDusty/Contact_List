import {AuthorizationAction, AuthorizationActionType, AuthorizationState} from "../../types/authorization";

const initialState: AuthorizationState = {
    isAuth: localStorage.getItem('isAuth'),
}

export const authorizationReducer = (state = initialState, action: AuthorizationAction): AuthorizationState => {
    switch (action.type) {
        case AuthorizationActionType.SET_IS_AUTH :
            return {isAuth: action.payload}
        default:
            return state
    }
}