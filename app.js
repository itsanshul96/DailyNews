const express = require('express');

const app = express();

const dotenv = require("dotenv");

dotenv.config({path: './.env'});

const {
    dirname
} = require("path");

const path = require("path");

const publicDirectory = path.join(__dirname, './public');

app.use(express.static(publicDirectory));

app.use(express.urlencoded({
    extended: false
}));

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