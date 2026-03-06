const { addNewVegProduct, addNewVegProducts, addNewNonVegProduct, addNewNonVegProducts, fetchAllVegProducts, fetchAllNonVegProducts,  addNewUser, getAllUsers } = require("./ProductService");

 // Adding Single Veg Product
	  addVegProduct = (req, res) => {
		addNewVegProduct(req.body);
		console.log(req.body)
		res.send("One Veg Product Added SuccessFully");
	  }

	   addUser = (req, res)=> {
		addNewUser(req.body);
		console.log(req.body)
		res.send("One Veg Product Added SuccessFully");
	  }
	  getUsers = async (req, res) => {
		try {
		  const veg = await getAllUsers();
		  res.json(veg);
		} 
		catch (err) {
		  res.status(500).json({ message: "Server Error" });
		}
	  }

	
	  // Adding Multiple Veg Products
	  addAllVegProducts = (req, res) => {
		addNewVegProducts(req.body);
		res.send("All Products Saved SuccessFully");
	  }

	  // Adding Single Non-Veg Product
	  addNonVegProduct = (req, res) => {
		addNewNonVegProduct(req.body);
		res.send("One Non-Veg Product Added SuccessFully");
	  }

	  // Adding Multiple Non-Veg Products
	  addAllNonVegProducts = (req, res) => {
		addNewNonVegProducts(req.body);
		res.send("All Non-Veg Products Saved SuccessFully");
	  }

	  // Fetching All the Veg Products From DataBase
	  getVegProducts = async (req, res) => {
		try {
		  const veg = await fetchAllVegProducts();
		  res.json(veg);
		} 
		catch (err) {
		  res.status(500).json({ message: "Server Error" });
		}
	  }

	  // Fetching All the Non-Veg Products From DataBase
	  getNonVegProducts = async (req, res) => {
		try {
		  const nonVeg = await fetchAllNonVegProducts();
		  res.json(nonVeg);
		} 
		catch (err) {
		  res.status(500).json({ message: "Server Error" });
		}
	  }
	  
	 module.exports = { addVegProduct, addAllVegProducts, addNonVegProduct, addAllNonVegProducts, getVegProducts, getNonVegProducts,addUser,getUsers}


