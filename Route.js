

const { addVegProduct, addAllVegProducts, addNonVegProduct, addAllNonVegProducts, getVegProducts, getNonVegProducts, addUser, getUsers } = require("./src/Productcontroller");
// const =require("./src/OrderController")
const router = require("express").Router();

	// Post Calls to Save Products in Database
	router.post("/saveVeg", addVegProduct);
	router.post("/saveAllVeg", addAllVegProducts);
	router.post("/saveAllVeg", addAllVegProducts);
	router.post("/adduser", addUser);
	router.post("/saveAllNonVeg", addAllNonVegProducts);

	// Get Calls to Get the Data from DataBase
	router.get("/getVeg", getVegProducts);
	router.get("/getNonVeg", getNonVegProducts);
    router.get("/getusers",getUsers)
	// Routes for Orders
// router.post("/create", OrderController.); // Create an order
// router.get("/:orderId", OrderController.getOrder); // Get an order by ID
// router.get("/user/:userId", OrderController.getUserOrders); // Get all orders for a user

	module.exports = router;
