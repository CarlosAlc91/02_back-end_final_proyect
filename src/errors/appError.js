//1.
export class AppError extends Error {
  constructor(message, statusCode) {
    super(message)

    this.statusCode = statusCode
    this.status = `statusCode`.startsWith('4') ? 'error' : 'fail'
    this.isOperational = true

    Error.captureStackTrace(this, this.constructor)
  }
}

//2. go to index.js
