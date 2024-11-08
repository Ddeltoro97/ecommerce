import axios from "axios";

import { GET_PRODUCTS, GET_CATEGORIES, ADD_CART, REMOVE_CART, LOGIN } from "./action-types";

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

export function login(username, password) {
    return async (dispatch) => {
      try {
        const response = await axios.get('http://localhost:3001/users', { username, password });
        
        dispatch({
          type: LOGIN,
          payload: response.data 
        });
      } catch (error) {
        console.error("Login failed:", error);
      }
    };
  }