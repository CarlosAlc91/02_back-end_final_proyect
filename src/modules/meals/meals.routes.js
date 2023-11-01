import express from 'express'
import { deleteMeal, findAllMeals, findMealById, registerMeal, updateMeal } from './meals.controller.js'


export const router = express.Router()

router
  .post('/register', registerMeal)
  .get(findAllMeals)

router
  .route('/:id')
  .get(findMealById)
  .patch(updateMeal)
  .delete(deleteMeal)