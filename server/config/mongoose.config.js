const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/canciondb", {
	useNewUrlParser: true,
	useUnifiedTopology: true,
})
	.then(() => console.log("Bse de datos lista!!!!!"))
	.catch(err => console.log("No tenemos DB", err));