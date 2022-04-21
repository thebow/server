var db = require("../database-mysql");
const { select,add, modifOne, deleteOne } = require("../database-mysql/eventModel.js");



  
module.exports = { selectAll:function(req,res){
select((err, results) => {
  if (err) {
      res.status(500).send(err);
  }
  else {
      res.status(201).json(results);
  }
})
},
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
} };
