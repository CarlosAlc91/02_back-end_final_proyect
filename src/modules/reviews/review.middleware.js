//1. import catchasync
import { AppError, catchAsync } from '../../errors/index.js'
import { ReviewService } from './review.service.js'



export const validateExistReview = catchAsync(async (req, res, next) => {
  const { id } = req.params

  const review = await ReviewService.findOneReview(id)

  if (!review) {
    return next(new AppError('Review not found'))
  }

  req.review = review
  next()
})
