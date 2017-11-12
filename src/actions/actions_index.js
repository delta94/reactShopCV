export const ADD_TO_CART = 'ADD_TO_CART';
export const CATEGORY_FILTER_APPLIED = 'CATEGORY_FILTER_APPLIED';
export const UPDATE_STOCK = 'UPdATE_STOCK';


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