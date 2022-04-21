const router = require('express').Router();
const { addEvent, modifEvent, deleteEvent } = require('../controllers/admin.controller.js');

// router.get("/admin",selectAll);
router.post('/add', addEvent);
router.put('/modif/:id', modifEvent);
router.delete('/delete/:id', deleteEvent);







module.exports = router;
