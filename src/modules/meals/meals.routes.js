import express from 'express'
import { deleteMeal, findAllMeals, findMealById, registerMeal, updateMeal } from './meals.controller.js'


export const router = express.Router()

router
  .get(findAllMeals)

router
  .route('/:id')
  .get(findMealById)
  .post(registerMeal)
  .patch(updateMeal)
  .delete(deleteMeal)