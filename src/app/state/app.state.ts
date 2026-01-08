import { RouterReducerState, routerReducer } from "@ngrx/router-store";
import { Msg } from "./model/msg";
import { Spinner } from "./model/spinner.model";
import { User } from "./model/user.model";
import { AuthReducer } from "./reducers/auth.reducer";
import { MessageReducer } from "./reducers/message.reducer";
import { spinReducer } from "./reducers/spinner.reducer";
import { userReducer } from "./reducers/user.reducer";
import { AuthResponse } from "./type/AuthResponse";
import { IPaginatedResponse } from "./interface/IPaginatedResponse";
import { ToUpdateReducer } from "./reducers/toUpdate.reducer";
import { ProductSuggestion } from "./model/product.suggestion.model";
import { ProductReducer } from "./reducers/product.reducer";
import { paginateReducer } from "./reducers/paginate.reducer";
import { Paginatee } from "./model/pagination.model";

export default interface AppState {
    users: User
    auth: AuthResponse
    loading: Spinner
    msg: Msg
    router: RouterReducerState
    userType: User
    toUpdate: User
    suggestion: ProductSuggestion
    pages: Paginatee
}


export const AppReducer = {
    userState: userReducer,
    authState: AuthReducer,
    spinState: spinReducer,
    msgState: MessageReducer,
    router: routerReducer,
    userType: userReducer,
    updateState: ToUpdateReducer,
    productState: ProductReducer,
    dataRowState: paginateReducer
}