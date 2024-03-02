import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();
import { connectDB } from './config/db.js';
import { authRouters } from './routes/authRoutes.js';
import paymentRoutes from './routes/payemtRoutes.js';
import request from 'request';

connectDB();

const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('Welcome To Enoch Louis Coding Bootcamp School');
});

app.use('/api/auth', authRouters);
// app.use('/api/projectCleanEarth/pay', paymentRoutes);
app.use('/api/pay', paymentRoutes);
// app.use('api.paystack.co');

// sendOtp();

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));
