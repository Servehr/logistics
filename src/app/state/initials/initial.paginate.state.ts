import { IPaginatee } from "./state/IPaginateState";

export const InitialState: IPaginatee = 
{
    pages: {
        loading: false,
        current_page: 0,
        has_next_page: false,
        has_previous_page: false,
        no_of_pages: 0,
        per_page: 0,
        total_page: 0
    }
}