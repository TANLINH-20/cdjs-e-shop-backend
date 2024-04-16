const express = require('express');
const router = express.Router();
const TopicController = require("../controllers/TopicController");

router.get("/index", TopicController.index);
router.get("/topicdetail/:slug", TopicController.topicdetail);
router.get('/show/:id', TopicController.show);
router.post('/store',TopicController.store);
router.put('/update/:id',TopicController.edit);
router.delete('/delete/:id',TopicController.delete);

module.exports = router;