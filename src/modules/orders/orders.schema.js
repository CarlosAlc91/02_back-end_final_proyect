import z from 'zod'
import { extractValidationData } from '../../common/utils/exrtractErrorData.js'

const registerOrder = z.object({
  quantity: z.number(),
  mealId: z.number()
})

export const validateOrder = (data) => {
  const result = registerOrder.safeParse(data)

  const {
    hasError,
    errorMessage,
    data: orderData
  } = extractValidationData(result)

  return {
    hasError,
    errorMessage,
    orderData
  }
}