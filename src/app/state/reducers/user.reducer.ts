import { Action, createReducer, on } from "@ngrx/store"
import { InitialState } from "../initials/initial.user.state"
import { AddingUser, AllUserByType, AllUser, DeleteUser, SingleUser, UpdateUser, AddedPaginatedData, UserAdded, ModifiedUser } from "../actions/user.actions"


const _userReducer = createReducer(
    InitialState, 
    on(UserAdded, (state: any, action: any) => 
    {
        return {
            ...state,
            users: [...state?.users, action.user]
        }
    }
    ),
    on(ModifiedUser, (state, action) =>
    {
        const updated = state.users.map((user) => {             
            return action.user.id === user.id ? action.user : user;
        })
        return {
            ...state, 
            users: updated
        }
    }),
    on(DeleteUser, (state,  action) => 
    {
        const deleted = state.users.filter((user) => 
        {
            return user.id !== action.user;
        });
        return {
            ...state,
            booking : deleted,
        }
    }),
    on(AllUserByType, (state: any, action: any) => {
        return {
            ...state, 
            users: action.users
        }
    }
    ),
    on(AddedPaginatedData, (state: any, action: any) => 
    {
        return {
            ...state, 
            users: action.allUsers
        }
    }
    )
)

export function userReducer(state: any, action: Action)
{
     return _userReducer(state, action)
}