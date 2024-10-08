import axios from "axios";

import { GET_PRODUCTS, GET_CATEGORIES, ADD_CART, REMOVE_CART } from "./action-types";

export function getProducts(){
    return async function(dispatch){
        const response = await axios("http://localhost:3001/products");
        return dispatch({
            type: GET_PRODUCTS,
            payload: response.data
        })
    }
}

export function getCategories(){
    return async function(dispatch){
        const response = await axios("http://localhost:3001/categories");
        return dispatch({
            type: GET_CATEGORIES,
            payload: response.data
        })
    }
}

export function addCart(product){
    return {
        type: ADD_CART,
        payload: product
    }
}

export function removeCart (product){
    return{
        type: REMOVE_CART,
        payload: product
    }
}