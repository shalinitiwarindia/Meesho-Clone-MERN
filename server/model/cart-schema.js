import mongoose from "mongoose";

const cartSchema = new mongoose.Schema({
  userEmail: {
    type: String,
    required: false
  },
  items: [
    {
      id: {
        type: String, 
        required: true
      },
      quantity: {
        type: Number,
        default: 1
      }
    }
  ],
  totalPrice: {
    type: Number,
    default: 0
  }
});

const Cart = mongoose.model("cart", cartSchema);

export default Cart;
