const express = require('express');
const app = express();

const PORT = 3000;

app.use((req, res, next) => {
    console.log(req.method, req.url);
    next();
});

app.get('/', (req, res) => {
    res.send('Welcome to Route Handling!');
});

app.get('/about', (req, res) => {
    res.send('<h1>About Us</h1>');
});

app.get('/products/:id', (req, res) => {
    res.send('Viewing Product ID: ' + req.params.id);
});

app.get('/search', (req, res) => {
    res.send('Searching for: ' + req.query.q);
});

app.use((req, res) => {
    res.status(404).send('Page Not Found');
});

app.listen(PORT, () => {
    console.log('Server running on port 3000');
});
