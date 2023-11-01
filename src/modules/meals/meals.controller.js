import { AppError, catchAsync } from "../../errors/index.js"
import { MealsService } from "./meals.service.js"

const mealsService = new MealsService()

export const findAllMeals = catchAsync(async (req, res, next) => { })
export const registerMeal = catchAsync(async (req, res, netx) => { })
export const findMealById = catchAsync(async (req, res, next) => { })
export const updateMeal = catchAsync(async (req, res, next) => { })
export const deleteMeal = catchAsync(async (req, res, next) => { })
