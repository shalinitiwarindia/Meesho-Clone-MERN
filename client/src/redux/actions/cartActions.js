import * as actionTypes from '../constants/cartConstant';
import axios from 'axios';

export const addToCart = (id, quantity) => async (dispatch, getState) => {
    try {
        const { data } = await axios.get(`http://localhost:8000/product/${id}`);

        dispatch({
            type: actionTypes.ADD_TO_CART,
            payload: { ...data, quantity },
        });

        const { cart: { cartItems, userEmail } } = getState();
        if (userEmail) {
            localStorage.setItem(`cartItems_${userEmail}`, JSON.stringify(cartItems));
        }

    } catch (error) {
        console.log({
            type: actionTypes.ADD_TO_CART_ERROR,
            payload: error.message
        });
    }
};
export const removeFromCart = (id) => (dispatch, getState) => {
    dispatch({
        type: actionTypes.REMOVE_FROM_CART,
        payload: id
    });

    const { cart: { cartItems, userEmail } } = getState();
    if (userEmail) {
        localStorage.setItem(`cartItems_${userEmail}`, JSON.stringify(cartItems));
    }
};
export const setUserEmail = (email) => (dispatch, getState) => {
    localStorage.setItem("userEmail", email);
    dispatch({
        type: actionTypes.SET_USER_EMAIL,
        payload: email
    });

    // load existing cart if any for this user
    const existingCart = JSON.parse(localStorage.getItem(`cartItems_${email}`)) || [];
    dispatch({
        type: actionTypes.CART_RESET,
        payload: existingCart
    });
};
