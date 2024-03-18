import { GET_PRODUCTS, GET_CATEGORIES } from "./action-types";

const initialState = {
    login: false,
    userId: null,
    products: [],
    categories: []
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
        default:
            return state
    }
}

export default reducer;