import express, { json } from 'express';
import cors from 'cors';

import { PORT } from './config.js';
import router from './routes/index.js';
import errorHandler from './middlewares/errorHandler.middleware.js';
// import notFoundHandler from './middlewares/notFoundHandler.middleware.js';

const app = express();

// Config
app.use(json());
app.use(cors());
app.disable('x-powered-by');

// Routes
app.use('/', router);

// Handle errors
app.use(errorHandler);
// app.use(notFoundHandler);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
