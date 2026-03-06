const express = require("express");
const router = express.Router();
const { addOrder, getOrder, getUserOrders, changeOrderStatus, changePaymentStatus } = require("./OrderController");

// Post Calls to Save Orders in Database
router.post("/saveOrder", addOrder); // Add a new order
router.put("/:orderId/status", changeOrderStatus); // Update order status
router.put("/:orderId/payment", changePaymentStatus); // Update payment status

// Get Calls to Get the Data from Database
router.get("/:orderId", getOrder); // Get order by ID
router.get("/user/:userId", getUserOrders); // Get orders by user ID

module.exports = orderrouter;