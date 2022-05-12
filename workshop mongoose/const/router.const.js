const router = require("express").Router();

const productRouter = require("../routes/products.routes");
const orderRouter = require("../routes/order.routes");

router.use(productRouter);
router.use(orderRouter);

module.exports = router;
