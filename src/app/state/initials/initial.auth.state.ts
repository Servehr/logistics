import { Auth } from "../model/auth.model";
import { AuthResponse } from "../type/AuthResponse";
import { IAuthState } from "./state/IAuthState";

export const InitialState: AuthResponse = {
    token: "",
    user_type: "",
    user: {},
    role: "",
    resources: [],
    actions: []
}