// import * as actionTypes from '../constants/cartConstant';

// export const cartReducer = (state = { cartItems: []}, action) => {
//     switch(action.type) {
//         case actionTypes.ADD_TO_CART:
//             const item = action.payload;

//             const existItem = state.cartItems.find(product => product.id === item.id);
            
//             if(existItem){
//                 return {
//                     ...state, cartItems: state.cartItems.map(data => data.product === existItem.product ? item : data)
//                 }
//             } else {
//                 return  { ...state, cartItems: [...state.cartItems, item]}
//             }
//         case actionTypes.REMOVE_FROM_CART:
//             return {
//                 ...state, cartItems: state.cartItems.filter(product => product.id !== action.payload)
//             }
//         default:
//             return state;
//     }
// }

import * as actionTypes from '../constants/cartConstant';

const initialState = {
    cartItems: [],
    userEmail: ''
};

export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_TO_CART:
            const item = action.payload;
            const existItem = state.cartItems.find(product => product.id === item.id);

            if (existItem) {
                return {
                    ...state,
                    cartItems: state.cartItems.map(data =>
                        data.id === existItem.id ? item : data
                    )
                };
            } else {
                return { ...state, cartItems: [...state.cartItems, item] };
            }

        case actionTypes.REMOVE_FROM_CART:
            return {
                ...state,
                cartItems: state.cartItems.filter(product => product.id !== action.payload)
            };

        case actionTypes.SET_USER_EMAIL:
            return {
                ...state,
                userEmail: action.payload
            };

        case actionTypes.CART_RESET:
            return {
                ...state,
                cartItems: action.payload
            };

        default:
            return state;
    }
};
