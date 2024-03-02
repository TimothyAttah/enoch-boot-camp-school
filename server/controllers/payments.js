import Payment from '../models/paymentModel.js';

const paymentControllers = {
  createPayment: async (req, res) => {
    try {
      const { firstname, lastname, email, amount } = req.body;
      if (!firstname || !lastname || !email || !amount) {
        return res.status(400).json({ msg: 'Please fill in all fields.' });
      }

      req.user.password = undefined;

      const payments = new Payment({
        firstname,
        lastname,
        email,
        amount,
        paidBy: req.user,
      });

      await payments.save();

      return res.status(200).json({ msg: 'Payment created', data: payments });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  getAllPayments: async (req, res) => {
    try {
      const payments = await Payment.find().populate('paidBy', '-password');
      return res
        .status(200)
        .json({ msg: 'All Payments created', data: payments });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },

  initializePayment: async (req, res) => {
    try {
      const { fullName, email, amount } = req.body;
      const https = require('https');

      const params = JSON.stringify({
        email: 'customer@email.com',
        amount: '20000',
      });

      const options = {
        hostname: 'api.paystack.co',
        port: 443,
        path: '/transaction/initialize',
        method: 'POST',
        headers: {
          Authorization:
            'Bearer sk_test_532e2a95b53164b6b77c5521a741f7258bf88efe',
          'Content-Type': 'application/json',
        },
      };

      const req = https
        .request(options, (res) => {
          let data = '';

          res.on('data', (chunk) => {
            data += chunk;
          });

          res.on('end', () => {
            console.log(JSON.parse(data));
          });
        })
        .on('error', (error) => {
          console.error(error);
        });

      req.write(params);
      req.end();
    } catch (err) {}
  },

  verifyPayment: async (req, res) => {
    try {
      const https = require('https');

      const options = {
        hostname: 'api.paystack.co',
        port: 443,
        path: '/transaction/verify/:reference',
        method: 'GET',
        headers: {
          Authorization: 'Bearer SECRET_KEY',
        },
      };

      https
        .request(options, (res) => {
          let data = '';

          res.on('data', (chunk) => {
            data += chunk;
          });

          res.on('end', () => {
            console.log(JSON.parse(data));
          });
        })
        .on('error', (error) => {
          console.error(error);
        });
    } catch (err) {}
  },
  listPayments: async (req, res) => {
    try {
      const https = require('https');

      const options = {
        hostname: 'api.paystack.co',
        port: 443,
        path: '/transaction',
        method: 'GET',
        headers: {
          Authorization: 'Bearer SECRET_KEY',
        },
      };

      https
        .request(options, (res) => {
          let data = '';

          res.on('data', (chunk) => {
            data += chunk;
          });

          res.on('end', () => {
            console.log(JSON.parse(data));
          });
        })
        .on('error', (error) => {
          console.error(error);
        });
    } catch (err) {}
  },
};

export default paymentControllers;
