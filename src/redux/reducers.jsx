import { combineReducers } from "redux";
import { ADD_TO_CART, SET_QUANTITY, SET_WEIGHT } from "./actions";

const initialProductState = {
    weight: '0,25 л',
    quantity: 1,
    pricePerUnit: 100,

}

const productReducer = (state = initialProductState , action) => {
    switch(action.type) {
        case SET_WEIGHT:
        return {
            ...state,
            weight: action.payload,
        }

        case SET_QUANTITY:
            return {
                ...state,
                quantity: action.payload,
            }

            case ADD_TO_CART:
                return {
                    ...state,
                    pricePerUnit: action.payload.pricePerUnit,
                }
    }
}

const cartReducer = ( state = [], action) => {
    switch(action.type) {
        case ADD_TO_CART:
            return [
                ...state,
                action.payload,
            ]
    }
}

const rootReducer = combineReducers({
    product: productReducer,
    cart: cartReducer,
})

export default rootReducer;
