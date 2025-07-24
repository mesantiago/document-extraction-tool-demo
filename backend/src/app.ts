import express from 'express';
import path from 'path';
import cors from 'cors';
import config from './config';

import documentRoutes from './routes/document';
import { errorHandler } from './middlewares/errorHandler';

const app = express();

app.use(
  cors({
    origin: config.clientUrl
  })
);
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public/')));

// Routes
app.use('/api/document', documentRoutes);
app.get('/{*splat}', (_req, res) => {
  res.sendFile('index.html', { root: path.join(__dirname, 'public/') });
});

// Global error handler (should be after routes)
app.use(errorHandler);

export default app;