import express, { json } from 'express';
import cors from 'cors';

import { PORT } from './config.js';
import { authRouter, apiRouter } from './routes/index.js';

const app = express();

app.use(
  cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
  })
);
app.disable('x-powered-by');

app.use(authRouter);

app.use(json());
app.use(apiRouter);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
