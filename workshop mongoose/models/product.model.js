const mongoose = require("mongoose");
const { Schema } = mongoose;

const productSchema = new Schema({
    name: {
        type: String,
        required: [true, "Name is required."],
        minlength: 3,
    },
    price: {
        type: Number,
        required: [true, "Price is required"],
        min: 100,
        max: 100000,
    },
    orders: {
        type: Schema.Types.ObjectId,
        ref: "Order",
    },
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
