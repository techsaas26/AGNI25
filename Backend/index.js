import express from 'express';
import dotenv from 'dotenv'; 
import { conn } from "./database/db.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const URL =  process.env.MONGO_URL;

// connect to our db
conn(URL);

app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
})