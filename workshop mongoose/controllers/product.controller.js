const Product = require("../models/product.model");
const ProductService = require("../services/product.service");

class ProductController {
  // Fetch all products:
  static async getAllProducts(req, res) {
    try {
      const products = await ProductService.getAllProducts();

      res.status(200).send(products);
    } catch (error) {
      console.log(error);
      res.status(400).send(error);
    }
  }
  // Get product by id:
  static async getProductById(req, res) {
    try {
      const productId = req.params.id;
      const product = await ProductService.getProductsById(productId);

      if (!product)
        return res
          .status(404)
          .send({ message: `Product with id: ${productId} not found.` });

      res.status(200).send(product);
    } catch (error) {
      console.log(error);
      res.status(400).send(error);
    }
  }
  // Create product:
  static async createProduct(req, res) {
    try {
      const productData = req.body;

      const product = await ProductService.createProduct(productData);

      res.status(201).send(product);
    } catch (error) {
      console.log(error);
      res.status(400).send(error);
    }
  }
  // Update product:
  static async updateProduct(req, res) {
    try {
      const updates = req.body;
      const productId = req.params.id;

      const updatedProduct = await ProductService.updateProduct(
        productId,
        updates
      );
      res.status(200).send(updatedProduct);
    } catch (error) {
      console.log(error);
      res.status(400).send(error);
    }
  }
  // Delete product:
  static async deleteProduct(req, res) {
    try {
      const productId = req.params.id;

      const response = await ProductService.deleteProduct(productId);
      console.log(response);
      if (!response){
        return res
        .status(404)
        .send({ message: `Product with id: ${productId} not found.` });
      }

      res.status(200).send(response);
    } catch (error) {
      console.log(error);
      res.status(400).send(error);
    }
  }
}

module.exports = ProductController;
