import PaymentService from '../service/PaymentService.js';

const paymentInstance = new PaymentService();

const paymentControllers = {
  startPayment: async (req, res) => {
    try {
      const response = await paymentInstance.startPayment(req.body);
      res.status(201).json({ status: 'Success', data: response });
    } catch (error) {
      res.status(500).json({ status: 'Failed', message: error.message });
    }
  },
  createPayment: async (req, res) => {
    try {
      const response = await paymentInstance.createPayment(req.query);
      res.status(201).json({ status: 'Success', data: response });
    } catch (error) {
      res.status(500).json({ status: 'Failed', message: error.message });
    }
  },
  getPayment: async (req, res) => {
    try {
      const response = await paymentInstance.paymentReceipt(req.body);
      res.status(201).json({ status: 'Success', data: response });
    } catch (error) {
      res.status(500).json({ status: 'Failed', message: error.message });
    }
  },
  getAllPayment: async (req, res) => {
    try {
      const response = await paymentInstance.getAllPayment();
      res.status(200).json({ status: 'Success', data: response });
    } catch (error) {
      res.status(500).json({ status: 'Failed', message: error.message });
    }
  },
  getPaymentReceipt: () => {
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
  },
};

export default paymentControllers;
