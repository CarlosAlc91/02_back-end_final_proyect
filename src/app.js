//1. imports and export
import express from "express"
//4. routes
import { router } from "./routes/routes.js"

//2. const for express
const app = express()

//3. middleware
app.use(express.json())

//5. routes e router imoprt
app.use('/api/v1', router)

//1. export
export default app