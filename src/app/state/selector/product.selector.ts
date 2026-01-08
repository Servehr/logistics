import { createFeatureSelector, createSelector } from '@ngrx/store';;
import { PRODUCT_STATE_NAME } from '../constant/product';
import { ProductSuggestion } from '../model/product.suggestion.model';

const getProductNameSuggestion = createFeatureSelector<ProductSuggestion>(PRODUCT_STATE_NAME)
export const getProductNamesToSearchFor = createSelector(getProductNameSuggestion, state => {
    return state
})