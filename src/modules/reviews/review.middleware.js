
import { AppError, catchAsync } from '../../errors/index.js'
import { ReviewService } from './review.service.js'
import { RestaurantService } from '../restaurants/restaurant.service.js'

const reviewService = new ReviewService()
const restaurantService = new RestaurantService()

export const validateExistReview = catchAsync(async (req, res, next) => {
  const { id } = req.params

  const review = await reviewService.findOneReview(id)

  if (!review) {
    return next(new AppError('Review not found'))
  }

  req.review = review
  next()
})

export const validateReview = catchAsync(async (req, res, next) => {
  const { restaurantId } = req.params

  const restaurant = await restaurantService.findOneRestaurant(restaurantId)

  if (!restaurant) {
    return next(
      new AppError('Restaurant not found')
    )
  }
  req.restaurant = restaurant
  next()
})

