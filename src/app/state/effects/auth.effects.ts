import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, exhaustMap, map, tap } from "rxjs/operators";
import { of } from "rxjs";
import { Router } from "@angular/router";
import { AuthService } from "src/app/service/auth.service";
import { LOGIN_SUCCESS, START_LOGIN } from "../actions/auth.actions";
import { Store } from "@ngrx/store";
import AppState from "../app.state";
import { SetErrorMessage, SetLoadingStatus } from "../actions/spinner.action";
import { UserService } from "src/app/service/user.service";

@Injectable({
    providedIn: 'root'
})

export class AuthEffect {

    constructor(private actions$: Actions, private authService: AuthService, private userService: UserService, private store: Store<AppState>, private router: Router){}

    login$ = createEffect(() => {
      return this.actions$.pipe(
        ofType(START_LOGIN),
          exhaustMap((action) => {
            return this.authService.login(action.email, action.password)
             .pipe(
                map((data) => {
                const x = JSON.stringify(data.plus)
                const y = JSON.parse(x)
                const actions = y.actions
                const pages = y.resources
                const user = this.authService.formatUserResponse(data, actions, pages)
                this.store.dispatch(SetErrorMessage({ msg: "successful", statusCode: 200, operation: "authenticate-user"  }))
                this.store.dispatch(SetLoadingStatus({ loading: false }))
                localStorage.setItem('user', JSON.stringify(user))
                return LOGIN_SUCCESS({ auth: user });
            }),
            catchError((errMsg: any) => 
              {
                console.log(errMsg)
                this.store.dispatch(SetErrorMessage({ msg: errMsg.error.message, statusCode: 400, operation: "authenticate-user"  }))
                this.store.dispatch(SetLoadingStatus({ loading: false }))
                return of();
              }
            )
          )
         })
  )
})

loginRedirect$ = createEffect(() => {
  return this.actions$.pipe(
    ofType(LOGIN_SUCCESS),
      tap((action) => {
        this.router.navigate(['overview'])
      })
    )
}, { dispatch: false })


}