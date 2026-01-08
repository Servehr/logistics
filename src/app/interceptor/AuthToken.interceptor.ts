import { HTTP_INTERCEPTORS, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable, exhaustMap } from "rxjs";
import AppState from "../state/app.state";
import { getUserToken } from "../state/selector/auth.selector";

@Injectable()
export class AuthTokenInterceptor implements HttpInterceptor {

    constructor(private store: Store<AppState>){}
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // return this.store.select(getUserToken).pipe(
        //     take(1).
        //     exhaustMap((token) => {
        //         if(!token)
        //         {
        //             return next.handle(req)
        //         }
        //         const modified = req.clone({
        //             params: req.params.append( 'auth', token )
        //         })
        //         console.log(modified)
        //         return next.handle(modified)
        //     })
        // )
        return next.handle(req)
    }

}