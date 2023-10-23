/* validaciones */
//1. imports
import z from 'zod'

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

}

//6. create common folder in src