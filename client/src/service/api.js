
import axios from 'axios';

const URL = 'http://localhost:8000';
export const authenticateSignup = async(data) => {
    try {
        return await axios.post(`${URL}/signup`,data);
    }catch (error) {
        console.log('Error while calling signup api', error);
    }
}

export const authenticateLogin = async(data) => {
    try {
        return await axios.post(`${URL}/login`,data);
    }catch (error) {
        console.log('Error while calling login api', error);
        return error.response;
    }
}


const API = axios.create({ baseURL: "http://localhost:8000" });

// Products
export const getProducts = () => API.get("/products");

// Cart
export const addToCart = (data) => API.post("/add-to-cart", data);
export const getCart = (email) => API.get(`/cart/${email}`);
export const removeFromCart = (data) => API.post("/remove-from-cart", data);

// Orders
export const placeOrder = (data) => API.post("/place-order", data);
export const getOrders = (email) => API.get(`/orders/${email}`);

export default API;
