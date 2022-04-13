const mysql = require('mysql');
require('dotenv').config();

// Create a MySQL credentials object
const connection = mysql.createConnection({
    host: process.env.HOST||'localhost',
    user: process.env.USER||'root',
    password: process.env.PASSWORD||'',
    database: process.env.DATABASE||'rate_my_ride'
});

// Connect to the MySQL server
connection.connect(err => {
    if (err) {
        console.error('error connecting: ' + err.stack);
    }
})

module.exports = connection;