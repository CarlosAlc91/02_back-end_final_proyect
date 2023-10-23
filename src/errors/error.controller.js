//1. imports appError and envs
import { AppError } from "./appError.js"
import { envs } from "../config/environments/environments.js"

//2. errors functions
const sendErrorDev = (err, res) => {
  res.status(err.statusCode).json({
    status: 'error',
    error: err,
    message: err.message,
    stack: err.stack
  })
}

const sendErrorProd = (err, res) => {
  if (err.isOperational) {
    res.status(err.statusCode).json({
      status: err.status,
      message: err.message
    })
  } else {
    console.error('ERROR', err)
    res.status(500).json({
      status: 'fail',
      message: 'somenthin went very wrong'
    })
  }
}

export const globalErrorHandler = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500
  err.status = err.status || 'fail'

  if (envs.NODE_ENV === 'development') {
    sendErrorDev(err, res)
  }

  if (envs.NODE_ENV === 'production') {
    let error = err
    sendErrorProd(error, res)
  }
}

//3. go to app.js