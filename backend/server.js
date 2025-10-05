import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connect from './config/connectMongo.js';
import requestRouter from './Routes/requestRoute.js';

// ✅ Load environment variables from .env
dotenv.config();

const app = express();
const port = 3003;

app.use(express.json());
app.use(cors());

// ✅ Connect to MongoDB
connect();

app.use('/api/request', requestRouter);

app.use('/', (req, res) => res.send("Server is running !!"));


app.listen(port, () => {
  console.log(`✅ Server is running on port: ${port}`);
});
