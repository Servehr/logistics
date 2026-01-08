import { createAction, props } from "@ngrx/store";
import { PAGINATION } from "../constant/spinner";
import { Paginatee } from "../model/pagination.model";

export const SetPagination = createAction(PAGINATION, props<{ pages: Paginatee }>())