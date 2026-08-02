import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connect from './config/connectMongo.js';
import requestRouter from './Routes/requestRoute.js';
import orderRoutes from "./Routes/orderRoutes.js";
import paymentRoutes from "./Routes/paymentRoutes.js";

dotenv.config({path: './.env'});

const allowedOrigins = process.env.ALLOWED_ORIGINS.split(",");


const app = express();
const port = process.env.PORT || 3003;

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true
}));


// Connect to MongoDB
connect();

// API Routes
app.use('/api/request', requestRouter);
app.use('/api/orders', orderRoutes); 
app.use('/api/payment', paymentRoutes);



app.get('/', (req, res) => {
  res.send("Server is running !!");
});

app.listen(port, () => {
  console.log(`✅ Server is running on port: ${port}`);
});
