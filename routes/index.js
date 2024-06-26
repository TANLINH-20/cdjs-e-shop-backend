const categoryRouter = require("./CategoryRouter");
const brandRouter = require("./BrandRouter");
const postRouter = require("./PostRouter");
const topicRouter = require("./TopicRouter");
const userRouter = require("./UserRouter");
const menuRouter = require("./MenuRouter");
const orderRouter = require("./OrderRouter");
const orderDetailRouter = require("./OrderDetailRouter");
const contactRouter = require("./ContactRouter");
const bannerRouter = require("./BannerRouter");
const productRouter = require("./ProductRouter");
const router = (app) => {
  app.use("/api/category", categoryRouter);
  app.use("/api/brand", brandRouter);
  app.use("/api/product", productRouter);
  app.use("/api/post", postRouter);
  app.use("/api/topic", topicRouter);
  app.use("/api/user", userRouter);
  app.use("/api/menu", menuRouter);
  app.use("/api/order", orderRouter);
  app.use("/api/orderdetail", orderDetailRouter);
  app.use("/api/contact", contactRouter);
  app.use("/api/banner", bannerRouter);
};
module.exports = router;
