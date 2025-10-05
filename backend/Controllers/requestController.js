import requestModel from "../Models/requestModel.js";


const submitRequest = async (req, res) => {
   const {freightType, load, city, name, phone} = req.body;

   try {
      const request = new requestModel({
         freightType, load, city, name, phone
      });

      await request.save();

      return res.json({success: true, message: "request submitted"});

   } catch (error) {
      return res.json({success: false, message:error.message});
   }
}

export { submitRequest };