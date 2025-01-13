const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const connectDB = async () => {
  try {
    await mongoose
      .connect(process.env.MONGODB_URL)
      .then(() => {
        console.log('Connected to MongoDB');
      })
      .catch((err) => console.error('MongoDB connection error:', err));
  } catch (err) {
    console.log('Mongodb connection error: ', err);
  }
};

module.exports = connectDB;
