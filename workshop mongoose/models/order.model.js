const { ObjectId } = require("bson");
const mongoose = require("mongoose");
const { Schema } = mongoose;

const orderSchema = new Schema({
    product: {
        type: Schema.Types.ObjectId,
        ref: "Product",
        required: true,
    },
    status: {
        type: String,
        required: true
    },
})

module.exports = orderSchema;