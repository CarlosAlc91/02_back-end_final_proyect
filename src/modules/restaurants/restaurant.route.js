/* RESTAURANT ROUTES */
//1. route snippet
import express from 'express'
import {
  findAllRestaurants,
  createRestaurants,
  findOneRestaurant,
  updateRestaurant,
  deleteRestaurant,
  createRestaurantReview,
  updateReview,
  deleteReview
} from './restaurant.controller.js'
import { validateExistRestaurant } from './restaurant.middleware.js'
import { validateExistReview } from '../reviews/review.middleware.js'
import { protectAccountOwner } from '../users/auth.middleware.js'


export const router = express.Router()

//2. ir a routes.js
//3. definir rutas de los restaurantes
router
  .route('/')
  .get(findAllRestaurants)
  .post(createRestaurants)

router
  .route('/:id')
  .get(findOneRestaurant)
  .patch(updateRestaurant)
  .delete(deleteRestaurant)

//5. agregar el middleware validateExistRestaurant
router.post('/reviews/:id', validateExistRestaurant, createRestaurantReview)
//6. go to restaurant.controller

router
  .route('/reviews/:restaurantId/:id')
  .patch(
    validateExistRestaurant,
    validateExistReview,
    protectAccountOwner,
    updateReview
  )
  .delete(deleteReview)

//4. go to restaurant.controller
