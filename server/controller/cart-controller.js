import Cart from "../model/cart-schema.js";

export const addToCart = async (req, res) => {
  console.log(req.body);

  try {
    const { userEmail, items, totalPrice } = req.body;

    // Validate items array
    if (!items || !Array.isArray(items) || items.length === 0) {
      return res.status(400).json({ message: "Items array is required." });
    }

    const existingCart = await Cart.findOne({ userEmail });

    if (existingCart) {
      // For each new item, update or add to existing cart
      items.forEach(({ id, quantity }) => {
        if (!id) {
          throw new Error("Item id is required.");
        }

        const existingItem = existingCart.items.find(item => item.id === id);

        if (existingItem) {
          existingItem.quantity += quantity || 1;
        } else {
          existingCart.items.push({ id, quantity: quantity || 1 });
        }
      });

      // Optionally update totalPrice if sent
      if (totalPrice !== undefined) {
        existingCart.totalPrice = totalPrice;
      }

      await existingCart.save();
      res.status(200).json({ message: "Cart updated", cart: existingCart });

    } else {
      // New cart
      const newCart = new Cart({
        userEmail,
        items,
        totalPrice
      });

      await newCart.save();
      res.status(201).json({ message: "Cart created", cart: newCart });
    }

  } catch (error) {
    console.error(error);
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
