import { Action, createReducer, on } from "@ngrx/store"
import { InitialState } from "../initials/initial.auth.state"
import { IAuthState } from "../initials/state/IAuthState"
import { LOGIN_SUCCESS } from "../actions/auth.actions"

const _authReducer = createReducer(InitialState,
     on(LOGIN_SUCCESS, (state: any, action: any) => {
        return {
            ...state,
            auth: action.auth
        }
     })
    )



export function AuthReducer(state: any, action: Action) {
    return _authReducer(state, action)
}