const express = require("express");
	const mongoose = require("mongoose");
	const cors = require("cors");

	const router = require("./Route");
    const orderrouter=require("./src/orederroutes")
	const app = express();

	// Middleware

	//Cross-origin Resource Sharing
	app.use(cors());
	app.use(express.json());

	// Routes
	app.use("/api/product", router);
	app.use("/api/product", orderrouter);


	 const MONGO_DB="mongodb+srv://akkupallisiva153_db_user:Thanvik@siva.0e6bnff.mongodb.net/foodDB"
	mongoose.connect(MONGO_DB)
		.then(() => console.log("MongoDB Connected Successfully"))
		.catch(err => console.log("MongoDB Connection Failed:", err));

	// Start Server
	app.listen(3000, () => {
		console.log("Server running on http://localhost:3000");
	});

// mongodb+srv://myusername:mypwd@siva.0e6bnff.mongodb.net/?retryWrites=true&w=majority&appName=siva"
// const MONGO_DB ="mongodb+srv://myusername:mypwd@siva.0e6bnff.mongodb.net/?appName=siva"
// MongoDB Connection
	// const MONGO_DB="mongodb+srv://akkupallisiva153_db_user:Thanvik@siva.mongodb.net/foodDB"
	// const MONGO_DB ="mongodb+srv://akkupallisiva153_db_user:Thanvik@siva.0e6bnff.mongodb.net/?retryWrites=true&w=majority&appName=siva"
	