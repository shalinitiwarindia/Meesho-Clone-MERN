import mongoose from 'mongoose';

const orderSchema = mongoose.Schema({
  userEmail: {
    type: String,
    required: true
  },
  items: [
    {
      productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'product',
        required: true
      },
      quantity: {
        type: Number,
        required: true
      }
    }
  ],
  totalAmount: {
    type: Number,
    required: true
  },
  orderDate: {
    type: Date,
    default: Date.now
  },
  status: {
    type: String,
    default: 'Placed'
  }
});

const Order = mongoose.model('Order', orderSchema);

export default Order;
