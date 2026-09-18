import express from 'express';
import { getHealthStatus } from '../controllers/healthController.js';

const router = express.Router();

// Health Check Route
router.get('/health', getHealthStatus);

/*
 * Future Phase Routes (ready for expansion):
 * router.use('/auth', authRoutes);
 * router.use('/users', userRoutes);
 * router.use('/tasks', taskRoutes);
 * router.use('/projects', projectRoutes);
 */

export default router;

