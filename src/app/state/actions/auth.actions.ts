import { createAction, props } from "@ngrx/store";
import { AUTH_LOGIN_START, AUTH_LOGIN_SUCCESS, FORGOT_LOGIN_START } from "../constant/auth";
import { AuthResponse } from "../type/AuthResponse";

export const START_LOGIN = createAction(AUTH_LOGIN_START, props<{email: string, password: string}>())

export const LOGIN_SUCCESS = createAction(AUTH_LOGIN_SUCCESS, props<{auth: AuthResponse}>())



export const START_FORGOT = createAction(FORGOT_LOGIN_START, props<{email: string}>())