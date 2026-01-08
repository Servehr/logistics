import { Action, createReducer, on } from "@ngrx/store"
import { LOGIN_SUCCESS } from "../actions/auth.actions"
import { InitialState } from "../initials/initial.product.suggestion.state"
import { SuggestedProductNames, SuggestedProductNamesResult } from "../actions/product.action"

const _productReducer = createReducer(InitialState,
     on(SuggestedProductNames, (state: any, action: any) => {
        console.log("+++++++++++++++++++")
        console.log(action.productName)
        console.log("+++++++++++++++++++")
        return {
            ...state,
            productNames: action
        }
     }),
     on(SuggestedProductNamesResult, (state: any, action: any) => {
        console.log("@@@@@@@@@@@@@@@@@@@@@")
        console.log(action)
        console.log("@@@@@@@@@@@@@@@@@@@@@")
        return {
            ...state,
            productNames: action.productNames
        }
     })
    )



export function ProductReducer(state: any, action: Action) {
    return _productReducer(state, action)
}