import requestModel from "../Models/requestModel.js";
import nodemailer from "nodemailer";

const submitRequest = async (req, res) => {
  try {

    console.log("📥 SUBMIT REQUEST");

    const { freightType, load, city, name, phone, email } = req.body;

    console.log("Freight Type:", freightType);
    console.log("Load:", load);
    console.log("City:", city);
    console.log("Name:", name);
    console.log("Phone:", phone);
    console.log("Customer Email:", email);

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

    console.log("✅ Request saved successfully");
    console.log("Request ID:", request._id);

    return res.json({
      success: true,
      message: "Request submitted successfully"
    });

  } catch (error) {
    console.error("❌ SUBMIT REQUEST ERROR:");
    console.error(error);

    return res.json({
      success: false,
      message: error.message
    });
  }
};


const getAllRequest = async (req, res) => {
  try {

    console.log("📋 GET ALL PENDING REQUESTS");
    const arr = await requestModel.find({
      status: "Pending"
    });

    console.log("✅ Pending requests found:", arr.length);

    return res.json({
      success: true,
      arr
    });

  } catch (error) {
    console.error("❌ GET ALL REQUEST ERROR:");
    console.error(error);

    return res.json({
      success: false,
      message: error.message
    });
  }
};



const updateRequestStatus = async (req, res) => {
  try {
    console.log("");
    console.log("🔄 UPDATE REQUEST STATUS");


    const { id } = req.params;
    const { status } = req.body;

    console.log("Request ID:", id);
    console.log("New Status:", status);


    const request = await requestModel.findById(id);

    if (!request) {
      console.log("❌ Request not found");

      return res.json({
        success: false,
        message: "Request not found"
      });
    }

    console.log("✅ Request found");
    console.log("Customer Name:", request.name);
    console.log("Customer Email:", request.email);
    console.log("Previous Status:", request.status);


    request.status = status;

    if (status === "Accepted") {
      request.orderNumber = "ORD" + Date.now();

      console.log(
        "✅ Order number generated:",
        request.orderNumber
      );
    }

    await request.save();

    console.log("✅ Request updated successfully");
    console.log("Current Status:", request.status);


    if (status === "Accepted") {

      console.log("");
       
      console.log("📧 EMAIL PROCESS STARTED");

      console.log("Checking email environment variables...");

      console.log(
        "EMAIL_USER:",
        process.env.EMAIL_USER || "NOT SET"
      );

      console.log(
        "EMAIL_PASS exists:",
        !!process.env.EMAIL_PASS
      );

      if (!process.env.EMAIL_USER) {
        console.error("❌ EMAIL_USER is missing from environment variables");
      }

      if (!process.env.EMAIL_PASS) {
        console.error("❌ EMAIL_PASS is missing from environment variables");
      }

      // ------------------------------------------------
      // CREATE SMTP TRANSPORTER
      // ------------------------------------------------

      console.log("Creating Gmail SMTP transporter...");

      const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS
        }
      });

      console.log("✅ SMTP transporter created");
      console.log("SMTP Host: smtp.gmail.com");
      console.log("SMTP Port: 587");
      console.log("SMTP Secure: false");

      // ------------------------------------------------
      // VERIFY SMTP CONNECTION
      // ------------------------------------------------

      console.log("Testing SMTP connection...");

      try {
        await transporter.verify();

        console.log("✅ SMTP CONNECTION SUCCESSFUL");
        console.log("✅ Gmail SMTP server is ready");
      } catch (smtpError) {

        console.error("❌ SMTP CONNECTION FAILED");

        console.error("SMTP Error Name:", smtpError.name);
        console.error("SMTP Error Code:", smtpError.code);
        console.error("SMTP Error Command:", smtpError.command);
        console.error("SMTP Error Message:", smtpError.message);

        console.error("Full SMTP Error:");
        console.error(smtpError);
      }

      // ------------------------------------------------
      // SEND EMAIL
      // ------------------------------------------------

      console.log("Preparing email...");
      console.log("From:", process.env.EMAIL_USER);
      console.log("To:", request.email);
      console.log("Subject: Order Confirmed 🎉");

      try {

        const info = await transporter.sendMail({
          from: process.env.EMAIL_USER,
          to: request.email,
          subject: "Order Confirmed 🎉",

          html: `
            <h2>Hello ${request.name}</h2>

            <p>
              Your request has been <b>Accepted</b>.
            </p>

            <h3>Your Order Number:</h3>

            <h1>${request.orderNumber}</h1>

            <p>
              You can use this order number to track your shipment.
            </p>
          `
        });

        console.log("✅ EMAIL SENT SUCCESSFULLY");
        console.log("Message ID:", info.messageId);
        console.log("Email Response:", info.response);

      } catch (emailError) {

        console.error("❌ EMAIL SENDING FAILED");

        console.error(
          "Email Error Name:",
          emailError.name
        );

        console.error(
          "Email Error Code:",
          emailError.code
        );

        console.error(
          "Email Error Command:",
          emailError.command
        );

        console.error(
          "Email Error Message:",
          emailError.message
        );

        console.error("Full Email Error:");
        console.error(emailError);
      }

       
      console.log("📧 EMAIL PROCESS FINISHED");

    } else {

      console.log(
        "ℹ️ Status is not Accepted. Email will not be sent."
      );
    }

    console.log("✅ UPDATE REQUEST STATUS COMPLETED");


    return res.json({
      success: true,
      message: `Request ${status}`
    });

  } catch (error) {

    console.error("");
    console.error("❌ UPDATE REQUEST STATUS ERROR");


    console.error("Error Name:", error.name);
    console.error("Error Code:", error.code);
    console.error("Error Message:", error.message);
    console.error(error);

    return res.json({
      success: false,
      message: error.message
    });
  }
};


const isAdminCheck = async (req, res) => {
  try {

    console.log("🔐 ADMIN LOGIN CHECK");


    const { username, password } = req.body;

    console.log("Username received:", username);

    const isValid =
      username === process.env.ADMIN_USERNAME &&
      password === process.env.ADMIN_PASSWORD;

    if (isValid) {
      console.log("✅ Admin authentication successful");

      return res.json({
        success: true
      });
    }

    console.log("❌ Invalid admin credentials");

    return res.json({
      success: false
    });

  } catch (error) {

    console.error("❌ ADMIN LOGIN ERROR:");
    console.error(error);

    return res.json({
      success: false,
      message: error.message
    });
  }
};




export {
  submitRequest,
  getAllRequest,
  updateRequestStatus,
  isAdminCheck
};