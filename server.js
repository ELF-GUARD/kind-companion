import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import companionRouter from './api/companion.js';

dotenv.config();

const app = express();
app.use(bodyParser.json());
app.use('/api/companion', companionRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Kind Companion server running on port ${PORT}`));
