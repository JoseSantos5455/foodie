import mongoose from 'mongoose';
import { MONGO_URI } from '.';

export default async function () {
  try {
    await mongoose.connect(MONGO_URI);
    console.log('DB CONNECTED');
  } catch (err) {
    console.log('Failed to connect to DB', err);
  }
}
