import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, map } from "rxjs";
import { environment } from "src/environments/environment.development";
import { User } from "../state/model/user.model";
import { IResponse } from "../state/interface/IResponses";
import { IAuthResponse } from "../state/interface/IAuthResponse";
import { IPaginatedResponse } from "../state/interface/IPaginatedResponse";

@Injectable({
    providedIn: "root"
})
export class UserService {

    constructor(private _http: HttpClient){}

    checkIfWorking() {
        return this._http.get<User[]>(`${environment.local}user/all-user`)
    } 

    AddUser(staff: User) : Observable<IResponse> {
        return this._http.post<IResponse>(`${environment.local}user/onboard`, { staff });
    }

    UpdateUser(staff: User) : Observable<IResponse> {
        return this._http.put<IResponse>(`${environment.local}user/update-user`, { staff });
    }

    DeleteUser(staff: number) : Observable<IResponse> {
        return this._http.delete<IResponse>(`${environment.local}user/${staff}`);
    }

    Users(currentPage: number, perPage: number) : Observable<any> {
        return this._http.get<any>(`${environment.local}user/users/${currentPage}/${perPage}`)
    }

    UserByType(user_type: number) : Observable<any> {
        return this._http.get<any>(`${environment.local}user/by-type/${user_type}`)
    }

    SearchUser(keyword: string) : Observable<any> {
        return this._http.post<any>(`${environment.local}user/search`, { keyword })
    }

    ServerResponse(response: IResponse)
    {
        
    }

    persistData = (data: any) => {
        // console.log(data)
        // localStorage.setItem('loggedInUser', JSON.stringify(data))
        // const getUserData = localStorage.getItem('user')
        // const x = JSON.parse(getUserData!)
        // console.log(x.data.token)
        // return
    }


}