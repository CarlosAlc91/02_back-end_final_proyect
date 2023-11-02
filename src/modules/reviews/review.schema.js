import z from 'zod'
import { extractValidationData } from '../../common/utils/exrtractErrorData.js'

const registerReview = z.object({
  comment: z.string().min(3, { message: 'comment too short' }).max(400),
  rating: z.number().max(5, { message: 'not allowed more than 5' })
})

export const validateReview = (data) => {
  const result = registerReview.safeParse(data)

  const {
    hasError,
    erroMessages,
    data: reviewData
  } = extractValidationData(result)

  return {
    hasError,
    erroMessages,
    reviewData
  }
}