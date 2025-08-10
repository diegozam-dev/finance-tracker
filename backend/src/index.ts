import express from 'express';
import cors from 'cors';

import { PORT } from './config.js';
import { toNodeHandler } from 'better-auth/node';
import { auth } from './utils/auth.js';
// import router from './routes/index.js';

const app = express();

app.use(
  cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
  })
);

app.disable('x-powered-by');

// app.use(router);

app.all('/api/auth/{*any}', toNodeHandler(auth));

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
