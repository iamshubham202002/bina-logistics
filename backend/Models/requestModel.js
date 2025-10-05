import mongoose from "mongoose";

const RequestSchema = new mongoose.Schema({
   freightType: {type: String, required: true},
   load: {type: Number, required: true},
   city: {type: String, required: true},
   name: {type: String, required: true},
   phone: {type: String, required: true}
 
})

const requestModel = mongoose.models.request || mongoose.model("request", RequestSchema);
export default requestModel;