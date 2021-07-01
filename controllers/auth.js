const mysql = require("mysql");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

db = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE

});

exports.register = (req, res) => {
    console.log(req.body);
    const {
        name,
        email,
        password
    } = req.body;

    db.query("select email from daily_news_users where email= ?", [email], async (error, results) => {
        if (error) {
            console.log('There is an error in your connection which is ' + error);
        } else {
            if (results.length > 0) {
                return res.render('register', {
                    message: 'This Email id is already registerd with us.'
                });
            }
        }
        let hashedPassword = await bcrypt.hash(password, 8);
        console.log(hashedPassword);

        db.query('insert into daily_news_users set ?', {
            name: name,
            email: email,
            password: hashedPassword
        }, (error, results) => {
            if (error) {
                console.log('Error in saving Data ' + error);
            } else {
                console.log('I am printing results ' + results);
                return res.render('home', {
                    message: "Welcome " + name + "! You are succesfully registerd with DailyNews, Let's read something meaningful"
                });
            }
        });
    });
}