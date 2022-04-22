// import the database connection
const conn = require('./index.js');


module.exports = {
    select: function (callback) {
        const sql="SELECT * FROM events";
        conn.query(sql, function (err,result){
            callback(err,result)
        });
      },

    add: function (event, callback) {
        const sql = "INSERT INTO events SET ?";
        conn.query(sql, event, function (error, results) {
            callback(error, results);
        });
    },
    modifOne: function (event, id, callback) {
        const sql = "UPDATE events SET ? WHERE id=?";
        conn.query(sql, [event, id], function (error, results) {
            callback(error, results);
        });
    },
    deleteOne: function (id, callback) {
        const sql = "DELETE FROM events WHERE id = ?";
        conn.query(sql, id, function (error, results) {
            callback(error, results);
        });
    }
};

