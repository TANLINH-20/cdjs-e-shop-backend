const express = require('express');
const router = express.Router();
const MenuController = require("../controllers/MenuController");

router.get("/index", MenuController.index);
router.get("/list/:parentid/:position/:level", MenuController.list);
router.get('/show/:id', MenuController.show);
router.post('/store',MenuController.store);
router.put('/update/:id',MenuController.edit);
router.delete('/delete/:id',MenuController.delete);

module.exports = router;