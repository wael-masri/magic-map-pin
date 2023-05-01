const mongoose = require("mongoose");

const PinSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      require: true,
    },
    latitude:{
        type: Number,
        require: true,
    },
    long:{
        type: Number,
        require: true,
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Pin", PinSchema);
