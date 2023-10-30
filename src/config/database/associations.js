/* asociaciones */

/* importaciones */
import Restaurant from "../../modules/restaurants/restaurant.model.js"
import Review from "../../modules/reviews/review.model.js"
import User from "../../modules/users/users.model.js"

export const initModel = () => {
  /* usuarios con reviews */
  User.hasMany(Review)
  Review.belongsTo(User)

  Restaurant.hasMany(Review)
  Review.belongsTo(Restaurant)
}