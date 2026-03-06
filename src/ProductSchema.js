const mongoose = require("mongoose");

		const ProductSchema = new mongoose.Schema({
			  id : Number,
			  name: String,
			  price: Number,
			  age: Number,
			  image: String,
			  ratings: Number,
			  category: String,
			}, 
		);

	module.exports = ProductSchema;
	