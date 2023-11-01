import Meals from "./meals.model.js"

export class MealsService {
  async findAllMeals(data) {
    return await Meals.findAll(data)
  }
  async createMeal(data) {
    return await Meals.create(data)
  }

  async findOneMeal(id) {
    return await Meals.findOne({
      where: {
        id,
        status: true
      }
    })
  }

  async updateMeal(meal, data) {
    return await meal.update(data)
  }

  async deleteMeal(meal) {
    return await meal.update({ status: true })
  }
}