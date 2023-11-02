import { Router } from "express"
import {
  findAllRestaurants,
  createRestaurants,
  findRestaurantById,
  updateRestaurant,
  deleteRestaurant
} from './restaurant.controller.js'
import { validateRestaurant } from "./restaurant.schema.js"
import { protect, restrictTo } from '../users/auth.middleware.js'
import {
  createReview,
  updateReview,
  deleteReview
} from '../reviews/review.controller.js'
import {
  validateExistReview,
  validateReview
} from '../reviews/review.middleware.js'

export const router = Router()

router
  .route('/')
  .get(findAllRestaurants)

router.use(protect)

router
  .route('/')
  .post(restrictTo('admin'), createRestaurants)

router
  .route('/:id')
  .get(validateRestaurant, findRestaurantById)

router
  .route('/:id')
  .patch(restrictTo('admin'), validateRestaurant, updateRestaurant)
  .delete(restrictTo('admin'), validateRestaurant, deleteRestaurant)

router
  .post('/reviews/:id', createReview)

router
  .route('/reviews/:restaurantId/:id')
  .patch(validateReview, validateExistReview, updateReview)
  .delete(validateReview, validateExistReview, deleteReview)

