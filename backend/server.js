import express from 'express';
import cors from 'cors';

import requestRouter from './Routes/requestRoute.js';

const app = express();

const port = 3003;
app.use(express.json());
app.use(cors());
app.use('/', (req, res) => res.send("server is running !!"));

app.use ('/api/request', requestRouter);


app.listen(port, ()=> {
   console.log(`server is running on port : ${port}`);
})