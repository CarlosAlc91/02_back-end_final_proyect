import z from 'zod'
import { extractValidationData } from '../../common/utils/exrtractErrorData.js'


const registerMealSchema = z.object({
  name: z.string().min(3, { message: 'name too short' }),
  price: z.number()
})


const updateMealSchema = z.object({
  name: z.string().min(3, { message: 'name too short' }),
  price: z.number()
})

export const validateRegisterMeal = (data) => {
  const result = registerMealSchema.safeParse(data)

  const {
    hasError,
    erroMessages,
    data: mealData
  } = extractValidationData(result)

  return {
    hasError,
    erroMessages,
    mealData
  }
}

export const validateUpdateMeal = (data) => {
  const result = updateMealSchema.safeParse(data)

  const {
    hasError,
    erroMessages,
    data: mealData
  } = extractValidationData(result)

  return {
    hasError,
    erroMessages,
    mealData
  }
}