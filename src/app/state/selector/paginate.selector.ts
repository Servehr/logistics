import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Paginatee } from '../model/pagination.model';
import { PAGINATION_STATE } from '../constant/spinner';

const getPaginated = createFeatureSelector<Paginatee>(PAGINATION_STATE)
export const getPageLinks = createSelector(getPaginated, state => {
    return state.pages
})