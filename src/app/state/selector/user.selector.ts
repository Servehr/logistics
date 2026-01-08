import { createFeatureSelector, createSelector } from '@ngrx/store';
import { User } from '../model/user.model';
import { USER_STATE_NAME, USER_TYPE_STATE_NAME } from '../constant/user';
import { IAuthResponseData } from '../interface/IAuthResponseData';
import { IResponse } from '../interface/IResponses';
import { IPaginatedResponse } from '../interface/IPaginatedResponse';
import { Update } from '../model/update';
import { VALUE_TO_UPDATE_STATE } from '../constant/spinner';

const getUserInformation = createFeatureSelector<User>(USER_STATE_NAME)
export const getUserInfo = createSelector(getUserInformation, state => {
    return state
})

const allUsers = createFeatureSelector<User[]>(USER_TYPE_STATE_NAME)
export const getUsers = createSelector(allUsers, state => {
    return state ? state : null
})

const getValue = createFeatureSelector<Update>(VALUE_TO_UPDATE_STATE)
export const getValueToUpdate = createSelector(getValue, state => {
    return state.user
})