import { Action, createReducer, on } from "@ngrx/store";
import { InitialState } from "../initials/initial.user.update.state";
import { SetValueToUpdate } from "../actions/user.actions";
import { User } from "../model/user.model";


const _toUpdate = createReducer(InitialState,    
    on(SetValueToUpdate, (state:any, action: any) => 
    {
        const user:User = action.user
        const status:boolean = action.status
        const position:boolean = action.position
        const singleUser = {
            user: user,
            status: status,
            position: position
        }
        return {
            ...state,
            user: singleUser
        }
    })
)


export function ToUpdateReducer(state: any, action: Action)
{
    return _toUpdate(state, action)
}