/* AUTENTICACION */

/* 
TODO 1.snippet protectRoute 
*/

import { promisify } from 'util'
import jwt from 'jsonwebtoken'
import { envs } from '../../config/environments/environments.js'
import { UserService } from './users.service.js'
import { catchAsync, AppError } from '../../errors/index.js'


//instanciar servicio de usuarios
const userService = new UserService()

export const protect = catchAsync(async (req, res, next) => {
  let token
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    token = req.headers.authorization.split(' ')[1]
  }

  if (!token) {
    return next(
      new AppError('You are not logged in! Please log in to get access', 401)
    )
  }

  const decoded = await promisify(jwt.verify)(
    token,
    envs.SECRET_JWT_SEED
  )

  //buscar el usuario utilizando el servicio example: const user = await ......
  const user = await userService.findOneUser(decoded.id)

  if (!user) {
    return next(
      new AppError('The owner of this token it not longer available', 401)
    )
  }

  req.sessionUser = user
  next()
})

//2.
//TODO snippet restrictTo
export const restrictTo = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.sessionUser.role)) {
      return next(
        new AppError('You do not have permission to perfom this action.!', 403)
      )
    }

    next()
  }
}

//3.
//TODO snippet protectAccountOwner
//importar catchAsync y AppError

export const protectAccountOwner = catchAsync(async (req, res, next) => {
  const { user, sessionUser } = req

  if (user.id !== sessionUser.id) {
    return next(new AppError('You do not own this account.', 401))
  }

  next()
})

//4. go to routes/routes.js