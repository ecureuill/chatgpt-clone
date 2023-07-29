import cors from 'cors';
import express, { Request, Response } from 'express';
import router from './routers';

const app = express();

app.use(cors());
app.use(express.json());
app.use(router);

export default app;