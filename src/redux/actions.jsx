// actions.js
export const SET_WEIGHT = 'SET_WEIGHT';
export const SET_QUANTITY = 'SET_QUANTITY';
export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const UPDATE_CART = 'UPDATE_CART';

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

export const removeFromCart = (index) => ({
    type: REMOVE_FROM_CART,
    payload: index,
});

export const updateCart = (newCart) => ({
    type: UPDATE_CART,
    payload: newCart,
})