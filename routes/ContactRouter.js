const express = require('express');
const router = express.Router();
const ContactController = require("../controllers/ContactController");

router.get("/index", ContactController.index);
router.get('/show/:id', ContactController.show);
router.post('/store',ContactController.store);
router.put('/update/:id',ContactController.edit);
router.delete('/delete/:id',ContactController.delete);

module.exports = router;