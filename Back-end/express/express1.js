import express from 'express';
import axios from 'axios';
import cors from 'cors';

const app = express();
const port = 5000;

app.use(cors());

app.get('/api/chatbot', (req, res) => {
    // Send a request to the Flask server
    axios.get('http://localhost:5000/api/chatbot', {  // Replace FLASK_PORT with the actual port of your Flask server
        params: req.query  // Pass the query parameters received by Express to the Flask server
    })
        .then(response => {
            res.json(response.data);
        })
        .catch(error => {
            console.error('Error fetching data from Flask server:', error);
            res.status(500).json({ error: 'Error fetching data from Flask server' });
        });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
