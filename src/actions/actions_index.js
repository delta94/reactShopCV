export const ADD_TO_CART = 'ADD_TO_CART';
export const CATEGORY_FILTER_APPLIED = 'CATEGORY_FILTER_APPLIED';


export function addToCart(id){
    return {
        type:ADD_TO_CART,
        payload:id
    }
}

export function selectTag(tag){
    console.log('on select tag action');
    console.log(tag);
    return{
        type:CATEGORY_FILTER_APPLIED,
        payload:tag
    }
}