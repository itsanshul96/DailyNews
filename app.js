const express = require('express');

const app = express();

app.set('view engine', 'hbs');

app.get("/home", (req, res) => {
    res.render("home");
});

app.get("/login", (req, res) => {
    res.render("login");
});

app.get("/register", (req, res) => {
    res.render("register");
});

app.listen(5000, () => {
    console.log('Server Started');
});