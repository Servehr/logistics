import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, exhaustMap, map } from 'rxjs';
import AppState from '../state/app.state';
import { getUserToken, isAuthenticated } from '../state/selector/auth.selector';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {

    constructor(private store: Store<AppState>, private router: Router){}

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ) : Observable<boolean> | Promise<boolean | UrlTree> | boolean | UrlTree 
    {
        return this.store.select(getUserToken)
                .pipe(
                    map((loggedIn) => {
                        const checkUser = localStorage.getItem("loggedInUser")
                        if(loggedIn)
                        {
                            return true;
                        } else {
                            this.router.navigate(['/']);
                            return false;
                        }
                    })
                )
    }

}