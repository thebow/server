const router = require('express').Router();
const eventController = require("../controllers/event.controller");

router.get("/selectAll", eventController.selectAll);
router.post('/add',eventController.addEvent);
router.put('/modif/:id', eventController.modifEvent);
router.delete('/delete/:id',eventController.deleteEvent);

module.exports = router;


// delete 

// interested

// update 
