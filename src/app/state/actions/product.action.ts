import { createAction, props } from '@ngrx/store'
import { SUGGESTED_NAMES, SUGGESTED_NAMES_RESULT } from '../constant/product'
import { ProductSuggestion } from '../model/product.suggestion.model'


export const SuggestedProductNames = createAction(SUGGESTED_NAMES, props<{ keyword: string }>())
export const SuggestedProductNamesResult = createAction(SUGGESTED_NAMES_RESULT, props<{ productNames: string[] }>())



