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
  res.send('Hello NICA NIGERIA');
});

app.use('/api/auth', authRouters);
// app.use('/api/projectCleanEarth/pay', paymentRoutes);
app.use('/api/pay', paymentRoutes);

const sendOtp = async (req, res) => {
  const data = {
    api_key: 'TLB6anMweT3gqty1T9fwHI5wCN9HJHraZgr5glpqzGoOKdBXEpbe16PnNYjEi6',
    message_type: 'NUMERIC',
    to: 'eg. +2348103194335',
    from: 'NICA',
    channel: 'dnd',
    pin_attempts: 10,
    pin_time_to_live: 5,
    pin_length: 6,
    pin_placeholder: '< 1234 >',
    message_text: 'Your pin is < 1234 >',
    pin_type: 'NUMERIC',
  };

  const options = {
    method: 'POST',
    url: 'https://api.ng.termii.com/api/sms/otp/send',
    headers: {
      'Content-Type': ['application/json', 'application/json'],
    },
    body: JSON.stringify(data),
  };

  request(options, function (error, response) {
    if (error) throw new Error(error);
    console.log(response.body);
  });
};

// sendOtp();

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));
