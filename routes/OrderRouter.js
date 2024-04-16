const express = require('express');
const router = express.Router();
const OrderController = require("../controllers/OrderController");

router.get("/index", OrderController.index);
router.get('/show/:id', OrderController.show);
router.get('/showlatest', OrderController.showlatest);
router.post('/store',OrderController.store);
router.put('/update/:id',OrderController.edit);
router.delete('/delete/:id',OrderController.delete);

module.exports = router;