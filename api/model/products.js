const mongoose = require("mongoose");

const ProductsSchema = new mongoose.Schema(
  {
    title: { 
      type:String,
      required: true
    },
    type: {
      type: String,
      required: true
    }, 
    description: String,
    filename: String,
    height: Number,
    width: Number,
    price: {
      type: Number,
      required: true
    },
    rating: Number
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Products", ProductsSchema);