import { catchAsync, AppError } from "../../errors/index.js"
import { MealsService } from "./meals.service.js"

const mealsService = new MealsService()

export const validateExistMeal = catchAsync(async (req, res, next) => {
  const { id } = req.params

  const meal = await mealsService.findOneMeal(id)

  if (!meal) {
    return next(new AppError('Meal not found', 401))
  }

  req.meal = meal
  next()
})