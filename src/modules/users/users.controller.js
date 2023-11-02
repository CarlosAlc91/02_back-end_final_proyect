
import { verifyPassword } from "../../config/plugins/encryptedPassword.js"
import generateJWT from "../../config/plugins/generate.jwt.js"
import { AppError, catchAsync } from "../../errors/index.js"
import { validateLogin, validateRegister, validatePartialRegister } from "./users.schema.js"
import { UserService } from './users.service.js'

const userService = new UserService()

export const loginUser = catchAsync(async (req, res, next) => {

  const {
    hasError,
    erroMessages,
    userData
  } = validateLogin(req.body)

  if (hasError) {
    return res.status(422).json({
      status: 'error',
      message: erroMessages
    })
  }

  const user = await userService.findUserByEmail(userData.email)

  if (!user) {
    return next(new AppError('this account does not exist', 404))
  }

  const isCorrectPassword = await verifyPassword(userData.password, user.password)

  if (!isCorrectPassword) {
    return next(new AppError('Incorrect email or password', 401))
  }

  const token = await generateJWT(user.id)

  return res.status(200).json({
    token,
    user: {
      name: user.name,
      email: user.email
    }
  })
})

export const registerUser = catchAsync(async (req, res, next) => {

  const {
    hasError,
    erroMessages,
    userData
  } = validateRegister(req.body)


  if (hasError) {
    return res.status(422).json({
      status: 'error',
      message: erroMessages
    })
  }

  const user = await userService.createUser(userData)

  const token = await generateJWT(user.id)

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
  const { user } = req
  const {
    hasError,
    erroMessages,
    userData
  } = validatePartialRegister(req.body)

  if (hasError) {
    return res.status(421).json({
      status: 'error',
      message: erroMessages
    })
  }

  const updateUser = await userService.updateUser(
    user,
    userData.name,
    userData.email
  )

  return res.status(201).json(updateUser)
})

export const deleteUser = catchAsync(async (req, res, next) => {
  const { user } = req
  await userService.deleteUser(user)
  return res.status(201).json(null)
})

