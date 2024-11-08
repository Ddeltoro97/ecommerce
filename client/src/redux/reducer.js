import { GET_PRODUCTS, GET_CATEGORIES, ADD_CART, REMOVE_CART, SET_CART, LOGIN} from "./action-types";
import {removeItems} from "./utils";

const initialState = {
    login: false,
    userId: null,
    products: [],
    categories: [],
    cart: []
}

const reducer = (state = initialState, action) =>{
    switch(action.type){
        case GET_PRODUCTS:
            return{
                ...state,
                products: action.payload
            }
        case GET_CATEGORIES:
            return{
                ...state,
                categories: action.payload
            } 
        case ADD_CART:
            return{
                ...state,
                cart:[...state.cart, action.payload]
            }
        case REMOVE_CART: 
            return{
                ...state,
                cart: removeItems(state, action.payload)
            }
        case LOGIN:{
            return{
                ...state,
                login: true,
                userId: action.payload
            }
        }         
        default:
            return state
    }
}

export default reducer;