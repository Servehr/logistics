import { Action, createReducer, on } from "@ngrx/store";
import { InitialState } from "../initials/initial.msg.state";
import { SetClearErrorMessage, SetErrorMessage } from "../actions/spinner.action";


const _message = createReducer(InitialState,    
    on(SetErrorMessage, (state:any, action: any) => {
        return {
            ...state,
            response: action
        }
    }),
    on(SetClearErrorMessage, (state:any, action: any) => {
        return {
            ...state,
            response: action
        }
    })
)


export function MessageReducer(state: any, action: Action)
{
    return _message(state, action)
}