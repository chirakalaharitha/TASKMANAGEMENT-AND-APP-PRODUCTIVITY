import mongoose from 'mongoose';

/**
 * @desc    Health check endpoint for Render monitoring & uptime testing
 * @route   GET /api/health
 * @access  Public (No Auth required)
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
    status: 'ok',
    message: 'Task Management Backend is running',
    database: databaseStatus,
    timestamp: new Date().toISOString(),
  });
};
