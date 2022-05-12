const Order = require("../models/order.model");
const ProductService = require("../services/product.service");

class OrderService {
  // Get all orders
  static async getAllOrders() {
    const orders = await Order.find({});

    return orders;
  }
  // Get order by id
  static async getOrderById(orderId) {
    const order = await Order.findById(orderId).populate("products");

    if (!order) return Promise.reject({ msg: "Order not found" });

    return order;
  }
  // Create order
  static async createOrder(orderData){
      const order = new Order(orderData)

      const newOrder = await order.save();

      return newOrder;
  }
  // Update order
  static async updateOrder(orderId, updateData){
      const order = this.getOrderById(orderId);

      const orderKeys = Object.keys(order);

      const updateKeys = Object.keys(updateData);

      updateKeys.forEach(key =>{
          order[key] = updateData[key];
      });
      await order.save();
  }
  // Delete order
  static async deleteOrder(orderId){
      await Order.findByIdAndDelete(orderId);
  }
}
