import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connect from './config/connectMongo.js';
import requestRouter from './Routes/requestRoute.js';
import orderRoutes from "./Routes/orderRoutes.js";
import paymentRoutes from "./Routes/paymentRoutes.js";

dotenv.config({path: './.env'});


const app = express();
const port = process.env.PORT || 3003;

app.use(express.json());
app.use(cors({
  origin: "*"
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
