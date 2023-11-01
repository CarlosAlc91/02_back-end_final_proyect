import { AppError, catchAsync } from "../../errors/index.js"
import { MealsService } from "./meals.service.js"
import { validateRegisterMeal } from './meals.schema.js'
import generateJWT from "../../config/plugins/generate.jwt.js"

const mealsService = new MealsService()

export const findAllMeals = catchAsync(async (req, res, next) => { })
export const registerMeal = catchAsync(async (req, res, netx) => {
  const {
    hasError,
    errorMessages,
    mealData
  } = validateRegisterMeal(req.body)

  if (hasError) {
    return res.status(422).json({
      status: 'error',
      message: errorMessages
    })
  }

  const meal = await mealsService.createMeal(mealData)

  const token = await generateJWT(meal.id)

  return res.status(201).json({
    token,
    meal: {
      name: meal.name,
      price: meal.price
    },
    meal
  })
})
export const findMealById = catchAsync(async (req, res, next) => { })
export const updateMeal = catchAsync(async (req, res, next) => { })
export const deleteMeal = catchAsync(async (req, res, next) => { })
