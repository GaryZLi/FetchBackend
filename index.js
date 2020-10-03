require('dotenv').config();
import express from 'express';
import cors from 'cors';
import './API';

const PORT = process.env.PORT || 5000;

const app = express();

app.use(cors());
app.use(express.json());

app.post('/', (req, res) => res.send(parse(req.body.data)));

app.listen(PORT, () => console.log('Listening on port:', PORT));