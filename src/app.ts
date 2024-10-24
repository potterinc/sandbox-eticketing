import express, { NextFunction, Response, Request, Application } from 'express';
import cors from 'cors';
import router from './routes/index.routes';
import AppConfig from './config/app.config';
import Logger from './middlewares/logger.middleware.';

const app:Application = express();
const logger = new Logger();

// Middlewares
app.use(express.json());
app.use(cors({ origin: '*', methods: ['GET', 'POST'] }));
app.use(logger.all);

// Routes
app.use(`${AppConfig.BASE_URL}`, router); // API base route

app.get('/', (req: Request, res: Response, next: NextFunction) => {
  res.redirect(`${AppConfig.BASE_URL}`);
})

export default app;