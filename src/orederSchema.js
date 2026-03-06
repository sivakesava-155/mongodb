const mongoose = require("mongoose");

// Assuming the ProductSchema is already defined and imported
const ProductSchema = require("./ProductSchema");  // Import your existing Product Schema

// Order Schema
const OrderSchema = new mongoose.Schema(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // Reference to the User collection
      required: true,
    },
    products: [ProductSchema],  // Embed the product array within the order
    total_amount: {
      type: Number,
      required: true,
    },
    order_date: {
      type: Date,
      default: Date.now,  // Automatically set the current date
    },
    status: {
      type: String,
      enum: ["pending", "shipped", "delivered", "cancelled"],  // Enum for order status
      default: "pending",  // Default order status is 'pending'
    },
    shipping_address: {
      type: String,
      required: true,  // Ensure shipping address is always provided
    },
    payment_status: {
      type: String,
      enum: ["unpaid", "paid"],
      default: "unpaid",  // Default payment status is 'unpaid'
    },
  },
  { timestamps: true } // Adds createdAt and updatedAt fields
);

// const Order = mongoose.model("Order", OrderSchema);
module.exports = OrderSchema;
// module.exports = Order;