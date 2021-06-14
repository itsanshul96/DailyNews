const express = require('express');

const app = express();

app.get("/", (req, res) => {
    res.send("<h1>Hi I am Anshul</h1>");
});

app.listen(5000, () => {
    console.log('Server Started');
});