import { AppError, catchAsync } from '../../errors/index.js'
import { validateReview } from './review.schema.js'
import { ReviewService } from "./review.service.js"

const reviewService = new ReviewService()


export const createReview = catchAsync(async (req, res, next) => {
  const {
    hasError,
    errorMessage,
    reviewData
  } = validateReview(req.body)

  if (hasError) {
    return res.status(422).json({
      status: 'error',
      message: errorMessage
    })
  }

  const { comment, rating } = reviewData
  const { id } = req.params
  const { sessionUser } = req

  const review = await reviewService.createReview({
    comment,
    rating,
    restaurantId: id,
    userId: sessionUser.id
  })

  return res.status(201).json(/* valor a retornar */)
})


export const updateReview = catchAsync(async (req, res, next) => {
  const { review } = req
  const { restaurant } = req
  const { sessionUser } = req

  if (sessionUser.id !== review.id) {
    return next(
      new AppError('Changes not allowed', 401)
    )
  }

  const {
    hasError,
    erroMessages,
    reviewData
  } = validateReview(req.body)

  if (hasError) {
    return res.status(422).json({
      status: 'error',
      message: erroMessages
    })
  }

  if (review.restaurantId !== restaurant.id) {
    return next(
      new AppError('Try another restaurant id', 401)
    )
  }

  const reviewUpdated = await reviewService.updateReview(review, reviewData)
  return res.status(200).json(reviewUpdated)
})

export const deleteReview = catchAsync(async (req, res, next) => {
  const { review } = req
  const { restaurant } = req
  const { sessionUser } = req

  if (sessionUser.id !== review.userId) {
    return next(new AppError('Changes not allowed', 401))
  }

  if (review.restaurantId !== restaurant.id) {
    return next(
      new AppError('Try another restaurant id', 401)
    )
  }

  await reviewService.deleteReview(review)
  return res.status(200).json(null)
})