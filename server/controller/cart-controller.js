import Cart from "../model/cart-schema.js";  

export const addToCart = async (req, res) => {
    
    try {
      const { id, quantity, userEmail } = req.body;
  
      const existingCart = await Cart.findOne({ userEmail });
  
      if (existingCart) {
        const existingItem = existingCart.items.find(item => item.productId === id);
  
        if (existingItem) {
          existingItem.quantity += quantity;
        } else {
          existingCart.items.push({ productId: id, quantity });
        }
  
        await existingCart.save();
        res.status(200).json({ message: "Cart updated", cart: existingCart });
      } else {
        const newCart = new Cart({
          userEmail,
          items: [{ productId: id, quantity }]
        });
  
        await newCart.save();
        res.status(201).json({ message: "Cart created", cart: newCart });
      }
  
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  export const getCartItems = async (req, res) => {
    try {
      const carts = await Cart.find({});
      res.status(200).json(carts);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  export const removeItemFromCart = async (req, res) => {
    try {
      const { id, userEmail } = req.body;
  
      const updatedCart = await Cart.findOneAndUpdate(
        { userEmail },
        { $pull: { items: { productId: id } } },
        { new: true }
      );
  
      if (updatedCart) {
        res.status(200).json({ message: "Item removed", cart: updatedCart });
      } else {
        res.status(404).json({ message: "Cart not found" });
      }
  
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
      