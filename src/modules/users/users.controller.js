/* funciones controladoras */

import generateJWT from "../../config/plugins/generate.jwt.js"
import { catchAsync } from "../../errors/index.js"
import { validateRegister } from "./users.schema.js"
import { UserService } from './users.service.js'

//7. instanciar e importat model
const userService = new UserService()

//1. crear funciones

export const loginUser = catchAsync(async (req, res, next) => {
  return res.status(200).json()
})
export const registerUser = catchAsync(async (req, res, next) => {
  //4. destructurar e importar la validacion de usuarios
  const {
    hasError,
    erroMessages,
    userData
  } = validateRegister(req.body)

  //5. valido si hay errores
  if (hasError) {
    return res.status(422).json({
      status: 'error',
      message: erroMessages
    })
  }

  //6. ir a users.model para encriptar la password
  //8. crear usuario
  const user = await userService.createUser(userData)

  //9. go to .env
  //10, generar e importar token
  const token = await generateJWT(user.id)

  //11.
  return res.status(201).json({
    token,
    user: {
      name: user.name,
      email: user.email
    },
    user

  })
})

export const updateUser = catchAsync(async (req, res, next) => {
  return res.status(200).json()
})
export const deleteUser = catchAsync(async (req, res, next) => {
  return res.status(200).json()
})

//2. go to users.routes.js and import functions
//3. import catchAsync