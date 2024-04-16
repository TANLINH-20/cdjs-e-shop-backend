const express = require('express');
const router = express.Router();
const BrandController = require("../controllers/BrandController");

router.get("/index", BrandController.index);
router.get('/show/:id', BrandController.show);
router.get('/showname/:slug', BrandController.show_name);
router.post('/store',BrandController.store);
router.put('/update/:id',BrandController.edit);
router.delete('/delete/:id',BrandController.delete);

module.exports = router;