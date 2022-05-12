const router = require("express").Router();
const ProductController = require("../controllers/product.controller");

// Get all products:
router.get("/all", ProductController.getAllProducts);
// Get product by id:
router.get("/:id", ProductController.getProductById)
// Create product:
router.post("/", ProductController.createProduct);
// Update product:
router.patch("/:id", ProductController.updateProduct);
// Delete product:
router.delete("/:id", ProductController.deleteProduct);

module.exports = router;