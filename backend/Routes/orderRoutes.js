import express from 'express';
import order from "../Models/Order.js";
const router = express.Router();

router.get("/track/:orderId", async (req, res) => {
    try {
        const order=await order.findOne({orderId:req.params.orderId});
        if(!order){
            return res.status(404).json({message:"Order not found"});
        }
        res.json(order);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});
router.post("/create", async (req, res) => {
  try {
    const newOrder = new Order(req.body);
    await newOrder.save();
    res.status(201).json(newOrder);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


export default router;