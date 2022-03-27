var express = require("express");
var router = express.Router();
var Controllers = require("../controllers");


router.get('/', (req, res) => {
    Controllers.commentController.getComment(res);
})

router.post('/create', (req, res) => {
    Controllers.commentController.createComment(req.body, res)
})



module.exports = router;