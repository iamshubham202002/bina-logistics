import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import connect from "./config/connectMongo.js";
import requestRouter from "./Routes/requestRoute.js";
import orderRoutes from "./Routes/orderRoutes.js";
import paymentRoutes from "./Routes/paymentRoutes.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 3003;

// Middleware
app.use(express.json());

const allowedOrigins = process.env.ALLOWED_ORIGINS
  ? process.env.ALLOWED_ORIGINS.split(",").map((o) => o.trim())
  : [];

app.use(
  cors({
    origin: (origin, callback) => {
      console.log("Origin:", origin);

      if (!origin) return callback(null, true);

      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      }

      if (origin.endsWith(".vercel.app")) {
        return callback(null, true);
      }

      console.log("Blocked:", origin);

      return callback(new Error("Not allowed by CORS"));
    },
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);


connect();

// Routes
app.use("/api/request", requestRouter);
app.use("/api/orders", orderRoutes);
app.use("/api/payment", paymentRoutes);

app.get("/", (req, res) => {
  res.send("Server is running!!");
});

app.listen(port, () => {
  console.log(`Server running on ${port}`);
});