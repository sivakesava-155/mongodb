

	const mongoose = require("mongoose"); 
	const ProductSchema = require("./ProductSchema");
	const UserSchema = require("./UserSchema");
	
	//Seprate Tables are Created For The ITEMS
	const vegProduct = mongoose.model("Veg", ProductSchema);
	const user=mongoose.model("user",UserSchema)
	const nonVegProduct = mongoose.model("Non-Veg", ProductSchema);

	// Saving Single Veg Product
	const addNewVegProduct = (newProduct) => {
		new vegProduct(newProduct).save();
		
	}
   



	// Saving Multiple Veg Products
	const addNewVegProducts = (newProducts) => {
		vegProduct.insertMany(newProducts);
	}

	// Saving Single Non-Veg Product
	addNewNonVegProduct = (newProduct) => {
		new nonVegProduct(newProduct).save();
	}

	// Saving Multiple Non-Veg Product
	addNewNonVegProducts = (newProducts) => {
		nonVegProduct.insertMany(newProducts);
	}

	// Fetching All Veg Products
	fetchAllVegProducts = () => {
		return vegProduct.find();
	}

	// Fetching All Non-Veg Products
	fetchAllNonVegProducts = () => {
		return nonVegProduct.find();
	}
	 const addNewUser=(newuser) =>{
		new user(newuser).save();
	}
	const getAllUsers = () => {
		return user.find();
	}


	module.exports = { addNewVegProduct, addNewVegProducts, addNewNonVegProduct, addNewNonVegProducts, fetchAllVegProducts, fetchAllNonVegProducts ,addNewUser,getAllUsers};

