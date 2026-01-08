import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, exhaustMap, map, tap } from "rxjs/operators";
import { of } from "rxjs";
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";
import AppState from "../app.state";
import { SetErrorMessage, SetLoadingStatus } from "../actions/spinner.action";
import { AddedPaginatedData, AddingUser, AllUser, AllUserByType, ModifiedUser, SearchUser, UpdateUser, UserAdded } from "../actions/user.actions";
import { UserService } from "src/app/service/user.service";
import { ADD_USER } from "../constant/user";
import { SetPagination } from "../actions/paginate.action";

@Injectable({
    providedIn: 'root'
})

export class UserEffect {

    constructor(private actions$: Actions, private userService: UserService, private store: Store<AppState>, private router: Router){}

    user$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(AddingUser),
            exhaustMap((action) => {
                return this.userService.AddUser(action.user)
                    .pipe(
                        map((data) => {
                            this.store.dispatch(SetErrorMessage({ msg: data.message, statusCode: 200, operation: "add-user" }))
                            this.store.dispatch(SetLoadingStatus({ loading: false }))
                            // this.userService.persistData(data.data)
                            return UserAdded({ user: data.data });
                        }),
                        catchError((errMsg: any) => {
                            this.store.dispatch(SetLoadingStatus({ loading: false }))
                            this.store.dispatch(SetErrorMessage({ msg: errMsg.error.error.message, statusCode: 400, operation: "add-user" }))
                            return of();
                        })
                    )
            })
        )
    })

    updateUser$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(UpdateUser),
            exhaustMap((action) => {
                return this.userService.UpdateUser(action.user)
                    .pipe(
                        map((data) => {
                            this.store.dispatch(SetErrorMessage({ msg: data.message, statusCode: 200, operation: "update-user"  }))
                            this.store.dispatch(SetLoadingStatus({ loading: false }))
                            return ModifiedUser({ user: data.data });
                        }),
                        catchError((errMsg: any) => {
                            this.store.dispatch(SetLoadingStatus({ loading: false }))
                            this.store.dispatch(SetErrorMessage({ msg: errMsg.error.error.message, statusCode: 200, operation: "update-user"  }))
                            return of();
                        })
                    )
            })
        )
    })

    users$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(AllUser),
            exhaustMap((action) => {
                return this.userService.Users(action.currentPage, action.perPage)
                    .pipe(
                        map((data) => {
                            this.store.dispatch(SetLoadingStatus({ loading: false }))
                            // this.store.dispatch(SetErrorMessage({ msg: data.message, statusCode: 200 }))
                            // this.store.dispatch(SetLoadingStatus({ loading: false }))

                            const paged = {
                                pages: {
                                    loading: true,
                                    current_page: Number(data?.data?.user?.current_page),
                                    has_next_page: data?.data?.user?.has_next_page,
                                    has_previous_page: data?.data?.user?.has_previous_page,
                                    no_of_pages: Number(data?.data?.user?.no_of_pages),
                                    per_page: Number(data?.data?.user?.per_page),
                                    total_page: Number(data?.data?.user?.total_pages)
                                }
                            }

                            this.store.dispatch(SetPagination({ pages: paged }))
                            return AddedPaginatedData({ allUsers: data?.data?.user?.data });
                        }),
                        catchError((errMsg: any) => {
                            // console.log(errMsg)
                            // this.store.dispatch(SetLoadingStatus({ loading: false }))
                            // this.store.dispatch(SetErrorMessage({ msg: errMsg.error.message, statusCode: 400 }))
                            // this.store.dispatch(SetLoadingStatus({ loading: false }))
                            return of();
                        })
                    )
            })
        )
    })

    userByType$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(AllUserByType),
            exhaustMap((action) => {
                return this.userService.UserByType(action.userType)
                    .pipe(
                        map((data) => {
                            this.store.dispatch(SetLoadingStatus({ loading: false }))
                            this.store.dispatch(SetErrorMessage({ msg: data.message, statusCode: 200, operation: "user-by-type"  }))
                            return AddedPaginatedData({ allUsers: data });
                        }),
                        catchError((errMsg: any) => {
                            this.store.dispatch(SetLoadingStatus({ loading: false }))
                            this.store.dispatch(SetErrorMessage({ msg: errMsg.error.message, statusCode: 400, operation: "user-by-type"  }))
                            return of();
                        })
                    )
            })
        )
    })

    userSearch$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(SearchUser),
            exhaustMap((action) => {
                return this.userService.SearchUser(action.keyword)
                    .pipe(
                        map((data) => {
                            this.store.dispatch(SetLoadingStatus({ loading: false }))
                            this.store.dispatch(SetErrorMessage({ msg: data.message, statusCode: 200, operation: "user-by-search"  }))
                            return AddedPaginatedData({ allUsers: data.data });
                        }),
                        catchError((errMsg: any) => {
                            this.store.dispatch(SetLoadingStatus({ loading: false }))
                            this.store.dispatch(SetErrorMessage({ msg: errMsg.error.message, statusCode: 400, operation: "user-by-search"  }))
                            return of();
                        })
                    )
            })
        )
    })


}