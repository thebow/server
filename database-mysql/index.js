var mysql = require('mysql2');


var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'passe1999',
  database : 'eventogo'
});


connection.connect((err, success) => {
  err ? console.log("connection failed", err) : console.log("Database connected successfully")
})


module.exports = connection;