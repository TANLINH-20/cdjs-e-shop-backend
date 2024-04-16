const express = require("express");
const router = express.Router();
const CategoryController = require("../controllers/CategoryController");

router.get("/list/:parentid", CategoryController.list);
router.get("/index", CategoryController.index);
router.get('/show/:id', CategoryController.show);
router.get('/showname/:slug', CategoryController.show_name);
router.post("/store", CategoryController.store);
router.put('/update/:id',CategoryController.edit);
router.delete("/delete/:id", CategoryController.delete);

module.exports = router;
