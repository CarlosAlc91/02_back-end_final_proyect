
import Meals from "../../modules/meals/meals.model.js"
import Restaurant from "../../modules/restaurants/restaurant.model.js"
import Review from "../../modules/reviews/review.model.js"
import User from "../../modules/users/users.model.js"
import Order from '../../modules/orders/orders.model.js'

export const initModel = () => {

  User.hasMany(Review)
  Review.belongsTo(User)

  User.hasMany(Order)
  Order.belongsTo(User)

  Restaurant.hasMany(Review)
  Review.belongsTo(Restaurant)

  Restaurant.hasMany(Meals)
  Meals.belongsTo(Restaurant)

  Meals.hasOne(Order)
  Order.belongsTo(Meals)

}