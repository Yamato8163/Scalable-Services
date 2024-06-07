const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(cors());

app.post('/send-message', (req, res) => {
    const message = req.body.message;
    console.log(`Received message: ${message}`);
    res.status(200).send({message: 'Message received!'});
});

app.listen(PORT, () => {
    console.log(`Backend service is running on http://localhost:${PORT}`);
});