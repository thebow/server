const router = require('express').Router();
const adminController = require("../controllers/admin.controller");

router.get("/admin", adminController.selectAll);

module.exports = router;
