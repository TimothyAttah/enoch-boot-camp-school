import request from 'request';
import _ from 'lodash';
import Payment from '../models/paymentModel.js';
import paystack from '../utils/paymentUtils.js';

const { initializePayment, verifyPayment } = paystack(request);

class PaymentService {
  startPayment(data) {
    return new Promise(async (resolve, reject) => {
      try {
        const form = _.pick(data, ['amount', 'email', 'firstname', 'lastname']);
        form.metadata = {
          name: form.name,
        };
        form.amount *= 100;

        initializePayment(form, (error, body) => {
          if (error) {
            reject(error.message);
          }
          const response = JSON.parse(body);
          return resolve(response);
        });
      } catch (error) {
        error.source = 'Start Payment Service';
        return reject(error);
      }
    });
  }

  createPayment(req) {
    const ref = req.reference;
    if (ref === null) {
      return reject({ code: 400, msg: 'No reference passed in query!' });
    }

    return new Promise(async (resolve, reject) => {
      try {
        verifyPayment(ref, async (error, body) => {
          if (error) {
            reject(error.message);
          }
          const response = JSON.parse(body);
          const { reference, amount, status } = response.data;
          const { email } = response.data.customer;
          const firstname = response.data.metadata.firstname;
          const lastname = response.data.metadata.lastname;

          const newPayment = {
            reference,
            amount,
            email,
            firstname,
            lastname,
            status,
          };
          const payment = await Payment.create(newPayment).populate('paidBy');
          return resolve(payment);
        });
      } catch (error) {
        error.source = 'Create Payment Service';
        return reject(error);
      }
    });
  }
  paymentReceipt(body) {
    return new Promise(async (resolve, reject) => {
      try {
        const reference = body.reference;
        const transaction = await Payment.findOne({
          reference: reference,
        }).populate('paidBy');
        return resolve(transaction);
      } catch (error) {
        error.source = 'Payment Receipt';
        return reject(error);
      }
    });
  }
  getAllPayment() {
    return new Promise(async (resolve, reject) => {
      try {
        // const reference = body.reference;
        const transaction = await Payment.find().populate('paidBy');
        return resolve(transaction);
      } catch (error) {
        error.source = 'Payment Receipt';
        return reject(error);
      }
    });
  }
}

export default PaymentService;
