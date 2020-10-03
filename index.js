require('dotenv').config();
import express from 'express';
import cors from 'cors';
import * as actions from './API';

const PORT = process.env.PORT || 5000;

const app = express();

app.use(cors());
app.use(express.json());

app.post('/', (req, res) => 
    res.json({
        unique: actions.parse(req.body.data),
        status: 200,
    })
);

app.listen(PORT, () => console.log('Listening on port:', PORT));