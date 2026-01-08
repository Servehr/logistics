import { Action, createReducer, on } from "@ngrx/store";
import { SetPagination } from "../actions/paginate.action";
import { InitialState } from "../initials/initial.paginate.state";


const _pageinate = createReducer(InitialState,    
    on(SetPagination, (state:any, action: any) => {
        return {
            ...state,
            pages: action.pages
        }
    })
)


export function paginateReducer(state: any, action: Action)
{
    return _pageinate(state, action)
}