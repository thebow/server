const router = require('express').Router();
const eventController = require("../controllers/event.controller");

router.get("/selectAll", eventController.selectAll);

module.exports = router;


// delete 

// interested

// update 
