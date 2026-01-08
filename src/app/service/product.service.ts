import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, map } from "rxjs";
import { environment } from "src/environments/environment.development";

@Injectable({
    providedIn: "root"
})
export class ProductService {

    constructor(private _http: HttpClient){}


    SearchProduct(keyword: string) : Observable<any> {
        console.log(keyword)
        return this._http.post<any>(`${environment.local}product/search`, { keyword })
    }

}