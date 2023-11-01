import z from 'zod'
import { extractValidationData } from '../../common/utils/exrtractErrorData.js'

/* post create */
const registerMealSchema = z.object({
  name: z.string().min(3, { message: 'name too short' }),
  price: z.number()
})

/* patch update */
const updateMealSchema = z.object({
  name: z.string().min(3, { message: 'name too short' }),
  price: z.number()
})

const validateRegisterMeal = (data) => {
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

const validateUpdateMeal = (data) => {
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