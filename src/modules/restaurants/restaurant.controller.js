
import { catchAsync } from '../../errors/index.js'
import { ReviewService } from '../reviews/review.service.js'
import { validateRestaurant } from './restaurant.schema.js'
import generateJWT from '../../config/plugins/generate.jwt.js'
import { RestaurantService } from './restaurant.service.js'


const restaurantService = new RestaurantService()

export const findAllRestaurants = catchAsync(async (req, res, next) => {
  //5.
  const restaurants = await restaurantService.findAllRestaurants()

  return res.status(200).json(restaurants)
})

export const createRestaurants = catchAsync(async (req, res, next) => {
  const {
    hasError,
    erroMessages,
    restaurantData
  } = validateRestaurant(req.body)

  if (hasError) {
    return res.status(421).json({
      status: 'error',
      message: erroMessages
    })
  }

  const restaurant = await restaurantService.createRestaurant(restaurantData)

  const token = await generateJWT(restaurantData.id)

  return res.status(201).json({
    token,
    restaurant
  })
})

export const findRestaurantById = catchAsync(async (req, res, next) => {
  const { restaurant } = req
  const token = await generateJWT(restaurant.id)
  return res.status(201).json({
    token,
    restaurant
  })

})

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