// actions.js
export const SET_WEIGHT = 'SET_WEIGHT';
export const SET_QUANTITY = 'SET_QUANTITY';
export const ADD_TO_CART = 'ADD_TO_CART';

export const setWeight = (weight) => ({
    type: SET_WEIGHT,
    payload: weight,
});

export const setQuantity = (quantity) => ({
    type: SET_QUANTITY,
    payload: quantity,
});

export const addToCart = (item) => ({
    type: ADD_TO_CART,
    payload: item,
});
