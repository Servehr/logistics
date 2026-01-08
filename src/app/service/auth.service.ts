import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment.development";
import { AuthResponse } from "../state/type/AuthResponse";
import { IAuthResponse } from "../state/interface/IAuthResponse";

@Injectable({
    providedIn: "root"
})
export class AuthService {

    constructor(private _http: HttpClient){}

    login(email: string, password: string) : Observable<IAuthResponse> {
        return this._http.post<IAuthResponse>(`${environment.local}auth/login`, { email, password });
    }

    formatUserResponse(response: IAuthResponse, userActions: [], userResources: [])
    {
        const { token, user_type, user, role } = response.data
        return new AuthResponse(token, user_type, user, role, userResources, userActions)
    }

}