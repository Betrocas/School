const mysql = require('mysql');
const connection = mysql.createConnection({
    host : process.env.DB_HOST,
    user : process.env.DB_USR,
    password : process.env.DB_PSSW,
    database : process.env.DB_NAME
});
module.exports = connection;