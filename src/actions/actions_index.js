export const ADD_TO_CART = 'ADD_TO_CART';
export const CATEGORY_FILTER_APPLIED = 'CATEGORY_FILTER_APPLIED';
export const UPDATE_STOCK = 'UPDATE_STOCK';
export const SET_ORDERING = "SET_ORDERING";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART"
export const RESET_STOCK = "RESET_STOCK"
export const FIRST_TIME_VISIT = "FIRST_TIME_VISIT";
export const IS_PAGE_CHANGE = "IS_PAGE_CHANGE"
export const MEMORIZE_LAST_PAGE = "LAST_PAGE";
export const RATING_SELECTED = "RATING_SELECTED"
export const SET_ACTIVE_PAGE = "SET_ACTIVE_PAGE"

export function addToCart(id){
    return {
        type:ADD_TO_CART,
        payload:id
    }
}

export function selectTag(tag){
    return{
        type:CATEGORY_FILTER_APPLIED,
        payload:tag
    }
}

export function updateStock(id){
    return {
        type: UPDATE_STOCK,
        payload:id
    }
}

export function resetStock(id){
    return{
        type: RESET_STOCK,
        payload:id
    }
}

export function setSelectedOrdering(ordering){
    return{
        type: SET_ORDERING,
        payload: ordering
    }
}

export function removeFromCart(id){
    return{
        type:REMOVE_FROM_CART,
        payload:id
    }
}

export function setFirstTimeVisit(){
    return{
        type:FIRST_TIME_VISIT,
    }
}

export function isPageChange(){
    return{
        type:IS_PAGE_CHANGE,
        payload:true
    }
}

export function memorizeLastPage(pageNumber){
    return{
        type:MEMORIZE_LAST_PAGE,
        payload:pageNumber
    }
}

export function selectRating(rating){
    return{
        type:RATING_SELECTED,
        payload:rating
    }
}
