import mongoose from 'mongoose';

export default async function () {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('DB CONNECTED');
  } catch (err) {
    console.log('Failed to connect to DB', err);
  }
}
