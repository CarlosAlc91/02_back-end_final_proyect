import { Router } from 'express'
import { deleteMeal, findAllMeals, findMealById, registerMeal, updateMeal } from './meals.controller.js'
import { validateExistRestaurant } from '../restaurants/restaurant.middleware.js'
import { validateExistMeal } from './meals.middleware.js'
import { protect, restrictTo } from '../users/auth.middleware.js'


export const router = Router()

router
  .get('/', findAllMeals)

router
  .route('/:id').get(validateExistMeal, findMealById)

router.use(protect)

router
  .post('/:id', restrictTo('admin'), validateExistRestaurant, registerMeal)

router
  .route('/:id')
  .patch(restrictTo('admin'), validateExistMeal, updateMeal)
  .delete(restrictTo('admin'), validateExistMeal, deleteMeal)