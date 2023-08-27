import express from 'express';
import bodyParser from 'body-parser';
import residentRoutes from './routes/resident.routes';
import cors from 'cors';

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use(cors({
    origin: 'http://localhost:4200'
}));

app.use('/residents', residentRoutes);

export default app;
