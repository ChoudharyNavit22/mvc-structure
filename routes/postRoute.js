var express = require("express");
var router = express.Router();
var Controllers = require("../controllers");


router.get('/', (req, res) => {
    Controllers.postController.getPost(res);
})

router.post('/create', (req, res) => {
    Controllers.postController.createPost(req.body, res)
})

router.put('/addLikes', (req, res) => {
    Controllers.postController.addLikes(req.body, res)
})


module.exports = router;