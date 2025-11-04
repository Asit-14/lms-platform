import { config } from 'dotenv';
import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import route from './routes/user.routes';


const app = express();

app.use(express.json());
app.use(
  cors({
    origin: [process.env.FRONTEND_URL],
    credentials: true,
  })
);

app.use(morgan('dev'))

app.use(cookieParser());

app.use('/ping', (req, res) => {
  res.send('pong');
});

app.use('/api/v1/user', route)

app.use(/.*/, (req, res) => {
  res.status(404).send('OOPS! 404 page not found');
});


app.use(errorMiddleware);

export default app;
