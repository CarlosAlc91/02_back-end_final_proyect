/* funciones controladoresa */
//1. imopr
import { date } from 'zod'
import { catchAsync } from '../../errors/index.js'
import { ReviewService } from '../reviews/review.service.js'
//4. improt service
import { RestaurantService } from './restaurant.service.js'

//5. instanciar service
const restaurantService = new RestaurantService()

//2. crear funciones controladoras
export const findAllRestaurants = catchAsync(async (req, res, next) => {
  //5.
  const restaurants = await restaurantService.findAllRestaurants()

  return res.status(200).json(restaurants)
})

export const createRestaurants = catchAsync(async (req, res, next) => {
  //6.
  const {
    name,
    address,
    rating
  } = req.body
  //7. go to service.js
  //8. 
  const restaurant = await restaurantService.createRestaurant({
    name,
    address,
    rating
  })

  return res.status(201).json(restaurant)

})

export const findOneRestaurant = catchAsync(async (req, res, next) => { })

export const updateRestaurant = catchAsync(async (req, res, next) => { })

export const deleteRestaurant = catchAsync(async (req, res, next) => { })

export const createRestaurantReview = catchAsync(async (req, res, next) => {
  //9. go to users/auth.middleware.js
  //10. para crear la review necesito enviar le comentario
  const { comment, rating } = req.body

  const { id } = req.params

  const { sessionUser } = req

  const review = await ReviewService.create({
    comment,
    rating,
    restaurantId: id,
    userId: sessionUser.id
  })

  return res.status(201).json(review)

})

export const updateReview = catchAsync(async (req, res, next) => {

  const { comment, rating } = req.body
  const { review } = req
  const reviewUpdated = await ReviewService.updateReview(review, { comment, rating })

  return res.status(200).json(reviewUpdated)
})

export const deleteReview = catchAsync(async (req, res, next) => { })

//3 y 6. ir a restaurant.service