import mongoose from 'mongoose';

/**
 * Connects to MongoDB database using Mongoose.
 * Logs status clearly without exposing connection credentials.
 */
export const connectDB = async () => {
  const mongoURI = process.env.MONGODB_URI;

  if (!mongoURI) {
    console.error('MongoDB Connection Error: MONGODB_URI is not set in environment variables.');
    throw new Error('MONGODB_URI environment variable missing');
  }

  try {
    console.log('Connecting to MongoDB Atlas...');
    const conn = await mongoose.connect(mongoURI, {
      serverSelectionTimeoutMS: 5000,
    });
    console.log(`MongoDB Atlas connected successfully. Host: ${conn.connection.host}`);
    return conn;
  } catch (error) {
    console.error(`MongoDB Atlas connection failed: ${error.message}`);
    throw error;
  }
};
