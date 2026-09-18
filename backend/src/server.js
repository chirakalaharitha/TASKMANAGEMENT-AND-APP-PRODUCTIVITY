import dotenv from 'dotenv';
// Load environment variables before importing app modules
dotenv.config();

import app from './app.js';
import { connectDB } from './config/db.js';

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  try {
    // Attempt database connection
    await connectDB();
    app.listen(PORT, '0.0.0.0', () => {
      console.log(`Server running on port ${PORT}.`);
    });
  } catch (error) {
    console.error('Failed to establish MongoDB connection on startup.');
    console.log(`Starting server on port ${PORT} (Database disconnected)...`);
    app.listen(PORT, '0.0.0.0', () => {
      console.log(`Server running on port ${PORT} with database disconnected.`);
    });
  }
};

startServer();
