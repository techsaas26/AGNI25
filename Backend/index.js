import express from 'express';
import dotenv from 'dotenv'; 
import cors from 'cors';
import { conn } from "./database/db.js";
import uploadRoutes from './routes/uploadRoutes.js';
import fetchRoutes from './routes/fetchRoutes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const URL =  process.env.MONGO_URI;

// connect to our db
conn(URL);

// middleware
app.use(cors({
  origin: 'http://localhost:5173', // allow frontend origin
  credentials: true
}));
app.use(express.json());

// app.use('/', (req, res) => {
//   res.send('Hello World!');
// });

app.use('/api/upload', uploadRoutes);
app.use('/api/fetch', fetchRoutes);

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
})