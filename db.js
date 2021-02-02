const mysql = require('mysql2');

const {
  DB_HOST,
  DB_NAME,
  DB_USER,
  DB_PASS
} = process.env;

const config = {
  host: DB_HOST,
  database: DB_NAME,
  user: DB_USER,
  password: DB_PASS
}

const connection = mysql.createConnection(config)

 module.exports = connection.promise();