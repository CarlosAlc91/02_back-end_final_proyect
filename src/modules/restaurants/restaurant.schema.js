import z from 'zod'
import { extractValidationData } from '../../common/utils/exrtractErrorData.js'

const registerRestaurant = z.object({
  name: z.string().min(3, { message: 'name too short' }).max(200),
  address: z.string().min(3, { message: 'name too short' }).max(200),
  rating: z.number()
})

export const validateRestaurant = (data) => {
  const result = registerRestaurant.safeParse(data)

  const {
    hasError,
    erroMessages,
    data: restaurantData
  } = extractValidationData(result)

  return {
    hasError,
    erroMessages,
    restaurantData
  }
}

export const validatePartialRestaurant = (data) => {
  const result = registerRestaurant.partial().safeParse(data)

  const {
    hasError,
    erroMessages,
    data: restaurantData
  } = extractValidationData(result)

  return {
    hasError,
    erroMessages,
    restaurantData
  }

}