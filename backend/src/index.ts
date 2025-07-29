import express, { json } from 'express';
import cors from 'cors';

import { PORT } from './config.js';
import router from './routes/index.js';

const app = express();

// Config
app.use(json());
app.use(cors());
app.disable('x-powered-by');

// Routes
app.use('/', router);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
