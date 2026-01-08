import { createAction, props } from '@ngrx/store'
import { User } from '../model/user.model'
import { ADDED_PAGINATED_USERS_BY_TYPE, ADDED_USER, ADD_USER, DELETE_USER, MODIFIED_USER, UPDATE_USER, USERS, USERS_BY_TYPE } from '../constant/user'
import { IPaginatedResponse } from '../interface/IPaginatedResponse'
import { USERS_SEARCH, VALUE_TO_UPDATE } from '../constant/spinner'


export const AddingUser = createAction(ADD_USER, props<{ user: User }>())
export const UserAdded = createAction(ADDED_USER, props<{ user: any }>())

export const UpdateUser = createAction(UPDATE_USER, props<{ user: User }>())
export const ModifiedUser = createAction(MODIFIED_USER, props<{ user: any }>())

export const DeleteUser = createAction(DELETE_USER, props<{ user: number }>())

export const SingleUser = createAction(UPDATE_USER, props<{ user: number }>())

export const AllUser = createAction(USERS, props<{ currentPage: number, perPage: number, allPages: number }>())
export const AddedPaginatedData = createAction(ADDED_PAGINATED_USERS_BY_TYPE, props<{ allUsers: any }>())
// export const AddedPaginatedData = createAction(ADDED_PAGINATED_USERS_BY_TYPE, props<{ allUsers: any, pageLinks: any }>())

export const AllUserByType = createAction(USERS_BY_TYPE, props<{ userType: number }>())

export const SetValueToUpdate = createAction(VALUE_TO_UPDATE, props<{ user: User, status: boolean, position: number }>())

export const SearchUser = createAction(USERS_SEARCH, props<{ keyword: string }>())


