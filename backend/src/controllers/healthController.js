import mongoose from 'mongoose';

/**
 * @desc    Health check endpoint to test API & DB connectivity
 * @route   GET /api/health
 * @access  Public
 */
export const getHealthStatus = (req, res) => {
  const dbStateMap = {
    0: 'disconnected',
    1: 'connected',
    2: 'connecting',
    3: 'disconnecting',
  };

  const dbState = mongoose.connection.readyState;
  const databaseStatus = dbStateMap[dbState] || 'unknown';

  res.status(200).json({
    success: true,
    message: 'Task Management System API is running',
    database: databaseStatus,
    timestamp: new Date().toISOString(),
  });
};

