import express from 'express';
import { userSignup, userLogin } from '../controller/user-controller.js';
import { getProducts, getProductById } from '../controller/product-controller.js';
import { addToCart, getCartItems} from "../controller/cart-controller.js";

const router = express.Router();

// User routes
router.post('/signup', userSignup); 
router.post('/login', userLogin); 

// Product routes
router.get('/products', getProducts); 
router.get('/product/:id', getProductById); 

// Cart routes
router.post("/add", addToCart); 
router.get("/cart", getCartItems); 



export default router;
