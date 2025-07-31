import e from 'express';
import mongoose from 'mongoose';

const pass = process.env.DB_PASSWORD;

async function connectToDatabase() {
  const dbUri =
    'mongodb+srv://webdevbiv:' +
    pass +
    '@practice01.pssemde.mongodb.net/university?retryWrites=true&w=majority&appName=practice01'; // Replace with your MongoDB URI

  await mongoose
    .connect(dbUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log('Connected to MongoDB');
    })
    .catch((err) => {
      console.error('Error connecting to MongoDB:', err);
    });
}

export { connectToDatabase };
