const express = require('express');
const router = express.Router();
const UserController = require("../controllers/UserController");

router.get("/index", UserController.index);
router.get('/show/:id', UserController.show);
router.post('/store',UserController.store);
router.put('/update/:id',UserController.edit);
router.delete('/delete/:id',UserController.delete);

module.exports = router;