import Razorpay from "razorpay";

export const createOrder = async (req, res) => {
  try {

    // Debug check
    console.log("ENV KEY:", process.env.RAZORPAY_KEY_ID);

    if (!process.env.RAZORPAY_KEY_ID || !process.env.RAZORPAY_SECRET) {
      return res.status(500).json({
        message: "Razorpay keys missing in .env file",
      });
    }

    const razorpay = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID,
      key_secret: process.env.RAZORPAY_SECRET,
    });

    const options = {
      amount: req.body.amount * 100, // amount in paise
      currency: "INR",
      receipt: `receipt_${Date.now()}`,
    };

    const order = await razorpay.orders.create(options);

    res.status(200).json(order);

  } catch (error) {
    console.error("Payment Error:", error);
    res.status(500).json({ message: "Payment error" });
  }
};
