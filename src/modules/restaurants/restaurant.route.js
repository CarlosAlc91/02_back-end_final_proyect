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

router.post('/reviews/:id', createRestaurantReview)

router
  .route('/reviews/:restaurantId/:id')
  .patch(updateReview)
  .delete(deleteReview)

//4. go to restaurant.controller