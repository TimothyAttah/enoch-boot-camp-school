import path from 'path';
import https from 'https';

const paymentController2 = {
  getPayment: async (req, res) => {
    try {
      const { email, amount, name } = req.body;

      // const https = require('https');

      const params = JSON.stringify({
        email: 'customer@email.com',
        amount: '20000',
        name: 'Testing',
      });

      const options = {
        hostname: 'api.paystack.co',
        port: 443,
        path: '/transaction/initialize',
        method: 'POST',
        headers: {
          Authorization:
            'Bearer sk_test_d02fdf49cc29ae9822e788484a0d36205c90d2f4',
          'Content-Type': 'application/json',
        },
      };

      const reqpaystack = https
        .request(options, (respaystack) => {
          let data = '';

          respaystack.on('data', (chunk) => {
            data += chunk;
          });

          respaystack.on('end', () => {
            res.send(data);
            console.log(JSON.parse(data));
          });
        })
        .on('error', (error) => {
          console.error(error);
        });

      // reqpaystack.write({ email, name, amount });
      reqpaystack.write(params);

      reqpaystack.end();
    } catch (err) {
      console.log(err);
    }
  },
};

export default paymentController2;
