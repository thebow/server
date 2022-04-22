var mysql = require('mysql2');
var myPassword = require('./env');




var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
<<<<<<< HEAD
  password :  myPassword.myPassword, // go to the env.js file and update your password
=======
  password : 'Hackmeslim1998',
>>>>>>> 1051409b21e989a92c872bbb89f2c4478493b62c
  database : 'eventogo'
});


connection.connect((err, success) => {
  err ? console.log("connection failed", err) : console.log("Database connected successfully")
})


module.exports = connection;