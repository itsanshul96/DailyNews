const express = require('express');
const app = express();
const mysql = require("mysql");
const dotenv = require("dotenv");

require('dotenv').config();


dotenv.config({path:'/.env'});

dotenv.config({path: './.env'});

const {
    dirname
} = require("path");

const path = require("path");

const { rootCertificates } = require('tls');

const publicDirectory = path.join(__dirname, './public');

app.use(express.static(publicDirectory));

//Parse url-encodded bodies (as sent by html forms)

app.use(express.urlencoded({
    extended: false
}));
app.use(express.json());

app.set('view engine', 'hbs');

//Define routes
app.use('/',require('./routes/pages'));
app.use('/auth', require('./routes/auth'));


db = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE

});

db.connect((error) =>{
    error ? console.log('There is ' + error) : console.log('Mysql Connected');
});

app.listen(5000, () => {
    console.log('Server Started');
});