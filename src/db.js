import getEnv from './utils/getEnv.js';
import mongoose from 'mongoose';

const DB_PASSWORD = getEnv('DB_PASSWORD');

// Function to connect to MongoDB
// Ensure that the password is correctly set in the .env file
// and that the connection string is properly formatted.
async function connectToDatabase() {
  const dbUri = getEnv('DB_URI').replace('${DB_PASSWORD}', DB_PASSWORD);

  await mongoose
    .connect(dbUri)
    .then(() => {
      console.log('Connected to MongoDB successfully "/university" database.');
    })
    .catch((err) => {
      console.error('Error connecting to MongoDB:', err);
    });
}

// Export the connect function for use in other modules
// Example usage: import { connectToDatabase } from './db.js'; connectToDatabase();
export { connectToDatabase };
