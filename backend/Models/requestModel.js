import mongoose from "mongoose";

const requestSchema = new mongoose.Schema({
  freightType: {
    type: String,
    required: true
  },
  load: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  status: {
    type: String,
    default: "Pending"
  }, 
  orderNumber: {
    type: String
  }
}, { timestamps: true });

const requestModel = mongoose.model("Request", requestSchema);

export default requestModel;
