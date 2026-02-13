import Order from "../models/ordersModel.js";
import Cart from "../models/cartModel.js";
import product from "../models/productsModel.js"; // small p

// Get all orders
export const getOrders = async (req, res) => {
  try {
    const orders = await Order.find().populate("items.product");
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get single order by ID
export const getOrdersById = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id).populate("items.product");
    if (!order) return res.status(404).json({ message: "Order not found" });

    res.status(200).json(order);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a new order from cart
export const creatOrders = async (req, res) => {
  try {
    const { customerName, customerAddress } = req.body;

    // Get all items in cart
    const cartItems = await Cart.find().populate("item");

    if (cartItems.length === 0)
      return res.status(400).json({ message: "Cart is empty" });

    let totalAmount = 0;
    const orderItems = [];

    for (const cart of cartItems) {
      const prod = await product.findById(cart.item._id); // small p

      if (prod.stock < cart.quantity)
        return res.status(400).json({
          message: `Not enough stock for ${prod.name}`,
        });

      // Reduce product stock
      prod.stock -= cart.quantity;
      await prod.save();

      // Calculate total
      totalAmount += prod.price * cart.quantity;

      // Prepare order items
      orderItems.push({
        product: prod._id,
        quantity: cart.quantity,
      });
    }

    // Create the order
    const order = await Order.create({
      items: orderItems,
      totalAmount,
      customerName,
      customerAddress,
    });

    // Clear the cart
    await Cart.deleteMany();

    res.status(201).json({
      message: "Order created successfully",
      order,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
