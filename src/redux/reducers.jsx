import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import honeyReducer from './honey/slice';
import storage from "redux-persist/lib/storage"; 

import {
  ADD_TO_CART,
  SET_QUANTITY,
  SET_WEIGHT,
  REMOVE_FROM_CART,
  UPDATE_CART,
  SET_PRICE_PER_UNIT,
} from "./actions";


const initialProductState = {
  title: "",
  image: "",
  weight: "0,25 л",
  quantity: 1,
  pricePerUnit: 100,
};

const productReducer = (state = initialProductState, action) => {
  switch (action.type) {
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
        ...action.payload,
      };
    case SET_PRICE_PER_UNIT:
      return {
        ...state,
        pricePerUnit: action.payload,
      };
    default:
      return state;
  }
};

const cartReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return [...state, action.payload];
    case REMOVE_FROM_CART:
      return state.filter((_, index) => index !== action.payload);
    case UPDATE_CART:
      return action.payload;
    default:
      return state;
  }
};


const persistConfig = {
  key: "root", 
  storage,
  whitelist: ["cart"], 
};

const rootReducer = combineReducers({
  product: productReducer,
  cart: cartReducer,
  honey: honeyReducer,
});


export default persistReducer(persistConfig, rootReducer);
