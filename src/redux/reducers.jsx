import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // Для использования localStorage

import {
  ADD_TO_CART,
  SET_QUANTITY,
  SET_WEIGHT,
  REMOVE_FROM_CART,
  UPDATE_CART,
  SET_PRICE_PER_UNIT,
} from "./actions";

// Initial states and reducers (продукт и корзина)
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

// Конфигурация для persist
const persistConfig = {
  key: "root", // ключ для сохранения данных
  storage, // используется localStorage
  whitelist: ["cart"], // здесь указывается, какие части состояния сохраняются
};

const rootReducer = combineReducers({
  product: productReducer,
  cart: cartReducer,
});

// Оборачиваем rootReducer в persistReducer
export default persistReducer(persistConfig, rootReducer);
