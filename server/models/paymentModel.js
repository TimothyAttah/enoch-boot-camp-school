import mongoose from 'mongoose';
const { ObjectId } = mongoose.Schema.Types;

const PaymentSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    amount: {
      type: String,
      required: true,
    },
    paidBy: { type: ObjectId, ref: 'Users' },

    status: {
      type: String,
      default: 'OK',
    },
  },
  { timestamps: true },
);

const Payment = mongoose.model('Payments', PaymentSchema);

export default Payment;
