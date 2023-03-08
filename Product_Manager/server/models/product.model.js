const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title is required"],
        minlength: [3, "Product title must be at least 3 characters long"]
    },
    price: {
        type: Number,
        required: [true, "Price is required"],
        min: [1, "Product price must be at least 1 dollar"]
    },
    description: {
        type: String,
        required: [true, "Description is required"],
        minlength: [3, "Product description must be at least 3 characters long"]
    }
}, { timestamps: true});

module.exports = mongoose.model("Product", ProductSchema);