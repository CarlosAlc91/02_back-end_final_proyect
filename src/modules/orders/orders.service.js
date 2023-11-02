
import Order from "./orders.model.js"
import Meals from "../meals/meals.model.js"
import Restaurant from "../restaurants/restaurant.model.js"

export class OrdersService {

  async findAllOrders(userId) {
    return await Order.findAll({
      where: {
        userId,
        status: 'active'
      },
      include: [
        {
          model: Meals,
          as: 'orderFromMeal',
          include: [{
            model: Restaurant,
            as: 'mealsFromRestaurant'
          }]
        }
      ]
    })
  }

  async createOrder(data) {
    return await Order.create(data)
  }

  async findOrderById(id) {
    return await Order.findOne({
      where: {
        id,
        status: 'active'
      },
      include: [{
        model: Meals,
        as: 'orderFromMeal',
        include: [{
          model: Restaurant,
          as: 'mealsFromRestaurant'
        }]
      }]
    })
  }

  async updateOrder(order) {
    return await order.update({ status: 'completed' })
  }

  async deleteOrder(order) {
    return await order.update({ status: 'cancelled' })
  }
}