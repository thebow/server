var db = require("../database-mysql");

var selectAll = function (req, res) {
    db.query("SELECT * FROM events", (err, result) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).send(result);
      }
    });
  };

  
module.exports = { selectAll };
