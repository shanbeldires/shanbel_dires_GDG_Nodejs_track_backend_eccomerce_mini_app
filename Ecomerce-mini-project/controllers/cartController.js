import Cart from "../models/cartModel.js";
import Product from "../models/productsModel.js";

export const getCarts = async (req, res) => {
  try {
    const carts = await Cart.find({ ordered: false }).populate("item");
    res.status(200).json(carts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


export const creatCarts = async (req, res) => {
  try {
    const { item, quantity } = req.body;

    if (!item || !quantity) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const product = await Product.findById(item);
    if (!product) return res.status(404).json({ message: "Product not found" });
    if (product.stock < quantity)
      return res.status(400).json({ message: "Not enough stock" });

  
    let cartItem = await Cart.findOne({ item: item, ordered: false });
    if (cartItem) {
      cartItem.quantity += quantity;
      await cartItem.save();
    } else {
      cartItem = await Cart.create({ item, quantity });
    }

    res.status(201).json(cartItem);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


export const updateCarts = async (req, res) => {
  try {
    const { id, quantity } = req.body;

    const cart = await Cart.findById(id);
    if (!cart) return res.status(404).json({ message: "Cart not found" });

    const product = await Product.findById(cart.item);
    if (product.stock < quantity)
      return res.status(400).json({ message: "Not enough stock" });

    cart.quantity = quantity;
    await cart.save();

    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteCartsById = async (req, res) => {
  try {
    const { id } = req.params;

    const deleted = await Cart.findByIdAndDelete(id);
    if (!deleted) return res.status(404).json({ message: "Cart not found" });

    res.status(200).json({ message: "Item removed from cart" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
