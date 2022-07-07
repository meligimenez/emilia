const express = require('express');
const path = require('path');
const port = 3030;
const app = express();


app.use(express.static('public'));

app.listen(port, () => console.log(`Server running in server http://localhost:${port}`));

app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'views', 'index.html')));
app.get('/music', (req, res) => res.sendFile(path.join(__dirname, 'views', 'music.html')));
app.get('/contact', (req, res) => res.sendFile(path.join(__dirname, 'views', 'contact.html')));
app.get('/about', (req, res) => res.sendFile(path.join(__dirname, 'views', 'about.html')));