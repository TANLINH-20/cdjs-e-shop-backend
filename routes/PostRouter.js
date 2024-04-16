const express = require("express");
const router = express.Router();
const PostController = require("../controllers/PostController");

router.get("/index", PostController.index);
router.get("/list/:type/:page/:limit", PostController.list);
router.get("/listbytopicid/:topicid", PostController.listbytopicid);
router.get("/listpostpage/:topicid/:page/:limit", PostController.listpostpage);
router.get("/listbytype/:type", PostController.listbytype);
router.get("/listnew/:type/:limit", PostController.listnew);
router.get("/pagedetail/:slug", PostController.pagedetail);
router.get("/postdetail/:slug/:limit", PostController.postdetail);
router.get("/show/:id", PostController.show);
router.post("/store", PostController.store);
router.put("/update/:id", PostController.edit);
router.delete("/delete/:id", PostController.delete);

module.exports = router;
