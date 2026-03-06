const mongoose = require("mongoose");
const orderSchema = require("./OrderSchema");
const Order=mongoose.model("Order",orderSchema)
// Create New Order
const addNewOrder = (newOrder) => {
  new Order(newOrder).save();
};

// Get Single Order
const fetchOrder = (orderId) => {
  return Order.findById(orderId);
};

// Get All Orders of a User
const fetchUserOrders = (userId) => {
  return Order.find({ user_id: userId });
};

// Change Order Status
const updateOrderStatus = (orderId, status) => {
  return Order.findByIdAndUpdate(
    orderId,
    { status: status },
    { new: true }
  );
};

// Change Payment Status
const updatePaymentStatus = (orderId, payment_status) => {
  return Order.findByIdAndUpdate(
    orderId,
    { payment_status: payment_status },
    { new: true }
  );
};

module.exports = {
  addNewOrder,
  fetchOrder,
  fetchUserOrders,
  updateOrderStatus,
  updatePaymentStatus
};