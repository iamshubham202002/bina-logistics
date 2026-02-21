import requestModel from "../Models/requestModel.js";
import nodemailer from "nodemailer";

// ==========================
// 1️⃣ SUBMIT REQUEST
// ==========================
const submitRequest = async (req, res) => {
  try {
    const { freightType, load, city, name, phone, email } = req.body;

    const request = new requestModel({
      freightType,
      load,
      city,
      name,
      phone,
      email,
      status: "Pending" 
    });

    await request.save();

    res.json({
      success: true,
      message: "Request submitted successfully"
    });

  } catch (error) {
    res.json({
      success: false,
      message: error.message
    });
  }
};

// ==========================
// 2️⃣ GET PENDING REQUESTS
// ==========================
const getAllRequest = async (req, res) => {
  try {
    const arr = await requestModel.find({ status: "Pending" });

    res.json({
      success: true,
      arr
    });

  } catch (error) {
    res.json({
      success: false,
      message: error.message
    });
  }
};

// ==========================
// 3️⃣ ACCEPT / REJECT
// ==========================
const updateRequestStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const request = await requestModel.findById(id);

    if (!request) {
      return res.json({
        success: false,
        message: "Request not found"
      });
    }

    request.status = status;

    if (status === "Accepted") {
      request.orderNumber = "ORD" + Date.now();
    }

 
    await request.save();

    
    if (status === "Accepted") {
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS
        }
      });

      transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: request.email,
        subject: "Order Confirmed 🎉",
        html: `
          <h2>Hello ${request.name}</h2>
          <p>Your request has been <b>Accepted</b>.</p>
          <h3>Your Order Number:</h3>
          <h1>${request.orderNumber}</h1>
          <p>You can use this order number to track your shipment.</p>
        `
      }).catch(err => console.log("Email error:", err));
    }

    return res.json({
      success: true,
      message: `Request ${status}`
    });

  } catch (error) {
    return res.json({
      success: false,
      message: error.message
    });
  }
};


// ==========================
// 4️⃣ ADMIN LOGIN CHECK
// ==========================
const isAdminCheck = async (req, res) => {
  try {
    const { username, password } = req.body;

    if (
      username === process.env.ADMIN_USERNAME &&
      password === process.env.ADMIN_PASSWORD
    ) {
      return res.json({ success: true });
    }

    return res.json({ success: false });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};


export {
  submitRequest,
  getAllRequest,
  updateRequestStatus,
  isAdminCheck
};
