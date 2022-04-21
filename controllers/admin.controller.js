const { add, modifOne, deleteOne } = require("../database-mysql/adminModel.js");


/**
 *Slim : 
 */


// UNCOMMENT LINES BELLOW////


// UNCOMMENT IF USING MYSQL WITH CALLBACKS
// var selectAll = function (req, res) {
//   db.query("SELECT * FROM items", (err, items, fields) => {
//     if (err) {
//       res.status(500).send(err);
//     } else {
//       res.status(200).send(items);
//     }
//   });
// };




module.exports = {

    addEvent: function (req, res) {
        add(req.body, (err, results) => {
            if (err) {
                res.status(500).send(err);
            }
            else {
                res.status(201).json(results);
            }
        })
    },
    modifEvent: function (req, res) {
        modifOne(req.body, req.params.id, (err, results) => {
            console.log(req.params.id)
            if (err) {
                res.status(500).send(err);
                console.log(err)
            }
            else {
                res.status(201).json(results);
            }
        })
    },
    deleteEvent: function (req, res) {
        let id = req.params.id;
        deleteOne(id, (err, results) => {
            if (err) {
                res.status(500).send(err);
            }
            else {
                res.status(201).json(results);
            }
        })
    }

}







