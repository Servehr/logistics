import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Auth } from '../model/auth.model';
import { AUTH_STATE_NAME } from '../constant/auth';
import { AuthResponse } from '../type/AuthResponse';
import { IAuthResponseData } from '../interface/IAuthResponseData';

const getAuthenticatedData = createFeatureSelector<Auth>(AUTH_STATE_NAME)

export const getAuthData = createSelector(getAuthenticatedData, state => {
    return state
})

export const isAuthenticated = createSelector(getAuthenticatedData, state => {
    return state ? state : null
})

export const getUserToken = createSelector(getAuthenticatedData, state => {
    return state?.auth?.token ? state?.auth?.token : null
})