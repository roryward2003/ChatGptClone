const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const OpenAI = require('openai');
require('dotenv').config();

const app = express();
app.use(cors(corsOptions)); // Necessary to allow streaming
const port = 3001;

const openai = new OpenAI({
  apiKey: process.env.API_KEY,
});

app.get('/new-thread', (req, res) => {
    // TODO
});

app.post('/chat', (req, res) => {
    // TODO
});

app.post('/model-select', (req, res) => {
    // TODO
});