import Payment from '../models/paymentModel.js';

const paymentControllers = {
  createPayment: async (req, res) => {
    try {
      const { fullName, email, amount } = req.body;
      if (!fullName || !email || !amount) {
        return res.status(400).json({ msg: 'Please fill in all fields.' });
      }

      req.user.password = undefined;

      const payments = new Payment({
        fullName,
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
};

export default paymentControllers;
