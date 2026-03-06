const express = require("express");
const orederrouter = express.Router();
const { addOrder, getOrder, getUserOrders, changeOrderStatus, changePaymentStatus } = require("./OrderController");

// Post Calls to Save Orders in Database
orederrouter.post("/saveOrder", addOrder); // Add a new order
orederrouter.put("/:orderId/status", changeOrderStatus); // Update order status
orederrouter.put("/:orderId/payment", changePaymentStatus); // Update payment status

// Get Calls to Get the Data from Database
orederrouter.get("/:orderId", getOrder); // Get order by ID
orederrouter.get("/user/:userId", getUserOrders); // Get orders by user ID

module.exports = orederrouter;