import mongoose from 'mongoose';
// const MongoClient = mongoose.

export const connectDB = async () => {
  try {
    const mongoDB = await mongoose.connect(process.env.MONGODB, {});
    console.log(`MongoDB connected successfully on ${mongoDB.connection.host}`);
  } catch (err) {
    console.log(err.message);
  }
};
