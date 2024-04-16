const express = require("express");
const router = express.Router();
const ProductController = require("../controllers/ProductController");

router.get("/index", ProductController.index);
router.get("/listnew/:limit", ProductController.listnew);
router.get("/listsale/:limit", ProductController.listsale);
router.get("/list_category/:categoryid",ProductController.list_category);
router.get("/list_brand/:brandid", ProductController.list_brand);
router.get("/list_product_search/:keyword", ProductController.list_product_search);
router.get("/list_product_search_by_page/:keyword/:page/:limit", ProductController.list_product_search_by_page);

router.get("/list/:page/:limit", ProductController.list);
router.get(
  "/list_product_category/:categoryid/:page/:limit",
  ProductController.list_product_category
);
router.get(
  "/list_product_brand/:brandid/:page/:limit",
  ProductController.list_product_brand
);
router.get("/productdetail/:slug/:limit", ProductController.productdetail);
router.get('/show/:id', ProductController.show);
router.post('/store',ProductController.store);
router.put('/update/:id',ProductController.edit);
router.delete('/delete/:id',ProductController.delete);

module.exports = router;
