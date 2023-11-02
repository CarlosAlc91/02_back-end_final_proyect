
import z from 'zod'
import { extractValidationData } from '../../common/utils/exrtractErrorData.js'

const registerUserSchema = z.object({
  name: z.string().min(3, { message: 'name too short' }),
  email: z.string().email({ message: 'invalid email' }),
  password: z.string().min(8, { message: 'password too short' })
})


const loginUserSchema = z.object({
  email: z.string().email({ message: 'invalid email' }),
  password: z.string().min(8, { message: 'password is too short' })
})


const updateUserSchema = z.object({
  email: z.string().email({ message: 'invalid email' }),
  name: z.string().min(3, { message: 'name too short' })
})

export const validateRegister = (data) => {

  const result = registerUserSchema.safeParse(data)

  const {
    hasError,
    erroMessages,
    data: userData
  } = extractValidationData(result)


  return {
    hasError,
    erroMessages,
    userData
  }

}

export const validatePartialRegister = (data) => {

  const result = registerUserSchema.partial().safeParse(data)

  const {
    hasError,
    erroMessages,
    data: userData
  } = extractValidationData(result)

  return {
    hasError,
    erroMessages,
    userData
  }

}

export const validateLogin = (data) => {

  const result = loginUserSchema.safeParse(data)

  const {
    hasError,
    erroMessages,
    data: userData
  } = extractValidationData(result)

  return {
    hasError,
    erroMessages,
    userData
  }

}

export const validateUpdateUser = (data) => {

  const result = updateUserSchema.safeParse(data)

  const {
    hasError,
    erroMessages,
    data: userData
  } = extractValidationData(result)

  return {
    hasError,
    erroMessages,
    userData
  }

}