import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, exhaustMap, map, tap } from "rxjs/operators";
import { of } from "rxjs";
import { LOGIN_SUCCESS } from "../actions/auth.actions";
import { Store } from "@ngrx/store";
import AppState from "../app.state";
import { SetErrorMessage, SetLoadingStatus } from "../actions/spinner.action";
import { ProductService } from "src/app/service/product.service";
import { SuggestedProductNames, SuggestedProductNamesResult } from "../actions/product.action";

@Injectable({
    providedIn: 'root'
})

export class ProductEffect {

    constructor(private actions$: Actions, private productService: ProductService, private store: Store<AppState>){}

    suggestions$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(SuggestedProductNames),
            exhaustMap((action) => {
                console.log(action.keyword)
                return this.productService.SearchProduct(action.keyword)
                        .pipe(
                            map((data) => {
                                console.log(data)
                                this.store.dispatch(SetErrorMessage({ msg: "successful", statusCode: 200, operation: "suggestions"  }))
                                this.store.dispatch(SetLoadingStatus({ loading: false }))
                                return SuggestedProductNamesResult({ productNames: data.data });
                            }),
                            catchError((errMsg: any) => {
                                console.log(errMsg)
                                this.store.dispatch(SetErrorMessage({ msg: errMsg.error.message, statusCode: 400, operation: "suggestions"  }))
                                this.store.dispatch(SetLoadingStatus({ loading: false }))
                                return of();
                            })
                        )
            })
        )
    })

}