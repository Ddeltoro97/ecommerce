import axios from "axios";

import { GET_PRODUCTS, GET_CATEGORIES } from "./action-types";

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