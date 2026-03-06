const {
  addNewOrder,
  fetchOrder,
  fetchUserOrders,
  updateOrderStatus,
  updatePaymentStatus
} = require("./orderService");

// Create Order
addOrder = (req, res) => {
  addNewOrder(req.body);
  console.log(req.body);
  res.send("Order Created Successfully");
};

// Get Single Order
getOrder = async (req, res) => {
  try {
    const order = await fetchOrder(req.params.id);
    res.json(order);
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
};

// Get Orders of a User
getUserOrders = async (req, res) => {
  try {
    const orders = await fetchUserOrders(req.params.userId);
    res.json(orders);
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
};

// Update Order Status
changeOrderStatus = async (req, res) => {
  try {
    const order = await updateOrderStatus(req.params.id, req.body.status);
    res.json(order);
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
};

// Update Payment Status
changePaymentStatus = async (req, res) => {
  try {
    const order = await updatePaymentStatus(req.params.id, req.body.payment_status);
    res.json(order);
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
};

module.exports = {
  addOrder,
  getOrder,
  getUserOrders,
  changeOrderStatus,
  changePaymentStatus
};