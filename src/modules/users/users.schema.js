/* validaciones */
//1. imports
import z from 'zod'
import { extractValidationData } from '../../common/utils/exrtractErrorData.js'

//2. register schema
const registerUserSchema = z.object({
  name: z.string().min(3, { message: 'name too short' }),
  email: z.string().email({ message: 'invalid email' }),
  password: z.string().min(8, { message: 'password too short' })
})

//3. login schema
const loginUserSchema = z.object({
  email: z.string().email({ message: 'invalid email' }),
  password: z.string().min(8, { message: 'password is too short' })
})

//4. update schema
const updateUserSchema = z.object({
  email: z.string().email({ message: 'invalid email' }),
  name: z.string().min(3, { message: 'name too short' })
})

//5. register validation
export const validateRegister = (data) => {

  const result = registerUserSchema.safeParse(data)

  //7. returning from extractErrorData
  //8. destructurar e importar de extractErrorData
  const {
    hasError,
    erroMessages,
    data: userData
  } = extractValidationData(result)

  //9. return
  return {
    hasError,
    erroMessages,
    userData
  }

}

//10. login schema
export const validateLogin = (data) => {

  const result = loginUserSchema.safeParse(data)

  const {
    hasError,
    erroMessages,
    data: userData
  } = extractValidationData(result)

  //9. return
  return {
    hasError,
    erroMessages,
    userData
  }

}

//11. login schema
export const validateUpdateUser = (data) => {

  const result = updateUserSchema.safeParse(data)

  const {
    hasError,
    erroMessages,
    data: userData
  } = extractValidationData(result)

  //9. return
  return {
    hasError,
    erroMessages,
    userData
  }

}

//12. go to users.controller

//6. create common folder in src