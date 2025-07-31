import dotenv from 'dotenv';
import mongoose from 'mongoose';

// Load environment variables from .env file
dotenv.config();

const pass = process.env.DB_PASSWORD;

// Function to connect to MongoDB
// Ensure that the password is correctly set in the .env file
// and that the connection string is properly formatted.
async function connectToDatabase() {
  const dbUri = `mongodb+srv://webdevbiv:${pass}@practice01.pssemde.mongodb.net/university?retryWrites=true&w=majority&appName=practice01`;

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

// Export the connect function for use in other modules
// Example usage: import { connectToDatabase } from './db.js'; connectToDatabase();
export { connectToDatabase };
