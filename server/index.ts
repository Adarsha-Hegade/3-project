import express from 'express';
import { config } from './config';
import { authRouter } from './routes/auth';
import { errorHandler } from './middleware/error';
import { connectDatabase } from './lib/database';
import cors from 'cors';

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRouter);

// Error handling
app.use(errorHandler);

// Initialize database and start server
async function start() {
  try {
    await connectDatabase();
    app.listen(config.server.port, () => {
      console.log(`🚀 Server running on port ${config.server.port}`);
    });
  } catch (error) {
    console.error('Failed to start server:', error);
    process.exit(1);
  }
}

start();