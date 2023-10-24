/* funciones controladoras */

import { verifyPassword } from "../../config/plugins/encryptedPassword.js"
import generateJWT from "../../config/plugins/generate.jwt.js"
import { AppError, catchAsync } from "../../errors/index.js"
import { validateLogin, validateRegister } from "./users.schema.js"
import { UserService } from './users.service.js'

//7. instanciar e importat model
const userService = new UserService()

//1. crear funciones

//12 crear login
export const loginUser = catchAsync(async (req, res, next) => {
  //13 destructurar validateLogin de schema.js
  const {
    hasError,
    erroMessages,
    userData
  } = validateLogin(req.body)

  //14. validacion si existe errorr
  if (hasError) {
    return res.status(422).json({
      status: 'error',
      message: erroMessages
    })
  }

  //15 ir a user.service.js y crear un nuevo servicio
  const user = await userService.findUserByEmail(userData.email)

  //16 validacion del usuario
  if (!user) {
    return next(new AppError('this account does not exist', 404))
  }

  //17 ir a encryptedPassword
  //18 verificar constrasenas
  const isCorrectPassword = await verifyPassword(userData.password, user.password)

  //19 validacion de contrasena
  if (!isCorrectPassword) {
    return next(new AppError('Incorrect email or password', 401))
  }

  //20 generacion de token
  const token = await generateJWT(user.id)

  //21 retorno
  return res.status(200).json({
    token,
    user: {
      name: user.name,
      email: user.email
    }
  })
})

//22. USUARIOS TERMINADOS => SEGUIMOS CON RESTAURANTES

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
