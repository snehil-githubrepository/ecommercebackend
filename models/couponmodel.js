const mongoose = require("mongoose");

const couponSchema = new mongoose.Schema({
  code: {
    type: String,
    required: true,
    unique: true,
  },
  discountPercentage: {
    type: Number,
    required: true,
    min: 0,
    max: 100,
  },
  expiryDate: {
    type: Date,
    required: true,
  },
  usageLimit: {
    type: Number,
    default: 1,
    min: 1,
  },
  usageCount: {
    type: Number,
    default: 0,
    min: 0,
  },
});

const Coupon = mongoose.model("Coupon", couponSchema);

module.exports = Coupon;
