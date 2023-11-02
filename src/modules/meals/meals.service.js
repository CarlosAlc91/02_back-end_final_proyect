import Meals from "./meals.model.js"
import Restaurant from '../restaurants/restaurant.model.js'

export class MealsService {
  async findAllMeals(data) {
    return await Meals.findAll({
      where: {
        status: true
      },
      include: [{
        model: Restaurant,
        as: 'mealsFromRestaurant'
      }]
    })
  }

  async createMeal(data) {
    return await Meals.create(data)
  }

  async findOneMeal(id) {
    return await Meals.findOne({
      where: {
        id,
        status: true
      },
      include: [{
        model: Restaurant,
        as: 'mealsFromRestaurant'
      }]
    })
  }

  async updateMeal(meal, data) {
    return await meal.update(data)
  }

  async deleteMeal(meal) {
    return await meal.update({ status: false })
  }
}