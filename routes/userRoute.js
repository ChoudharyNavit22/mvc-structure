var express = require("express");
var router = express.Router();
var Controllers = require("../controllers");


router.get('/', (req, res) => {
    Controllers.userController.getUsers(res);
})

router.post('/create', (req, res) => {
    Controllers.userController.createUsers(req.body, res)
})


module.exports = router;