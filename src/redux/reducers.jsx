import { combineReducers } from "redux";
import { ADD_TO_CART, SET_QUANTITY, SET_WEIGHT, REMOVE_FROM_CART, UPDATE_CART } from "./actions";

const initialProductState = {
    weight: '0,25 л',
    quantity: 1,
    pricePerUnit: 100,
};

const productReducer = (state = initialProductState, action) => {
    switch(action.type) {
        case SET_WEIGHT:
            return {
                ...state,
                weight: action.payload,
            };
        case SET_QUANTITY:
            return {
                ...state,
                quantity: action.payload,
            };
        case ADD_TO_CART:
            return {
                ...state,
                pricePerUnit: action.payload.pricePerUnit,
            };
        default:
            return state;
    }
};


const cartReducer = (state = [], action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return [
                ...state,
                action.payload,
            ];
            case REMOVE_FROM_CART:
                return state.filter((_, index) => index !== action.payload);
        case UPDATE_CART:
            return action.payload;
        default:
            return state; // Добавляем default случай, который возвращает текущее состояние
    }
}

const rootReducer = combineReducers({
    product: productReducer,
    cart: cartReducer,
})

export default rootReducer;
