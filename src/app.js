//1. imports and export
import express from "express"
//4. import routes
import { router } from "./routes/routes.js"
//6. import errorss
import { AppError } from "./errors/appError.js"
import { globalErrorHandler } from "./errors/index.js"

//2. const for express
const app = express()

//3. middleware
app.use(express.json())

//5. routes e router imoprt
app.use('/api/v1', router)

//7. errors
app.all('*', (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server`, 404))
})

//8. errores van al controlador de errores
app.use(globalErrorHandler)

//9. go to users.model.js

//1. export
export default app