const express = require('express');
const router = express.Router();
const OrderDetailController = require("../controllers/OrderDetailController");

router.get("/index", OrderDetailController.index);
router.get('/show/:id', OrderDetailController.show);
router.post('/store',OrderDetailController.store);
router.put('/update/:id',OrderDetailController.edit);
router.delete('/delete/:id',OrderDetailController.delete);

module.exports = router;