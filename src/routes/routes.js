/* ROUTAS DE CADA UNO DE LOS MODULOS */

//1. imports
import express from 'express'
//4. 
import { router as userRouter } from '../modules/users/users.routes.js'
//7. import routas de restaurants
import { router as restaurantRouter } from '../modules/restaurants/restaurant.route.js'
//2. 
export const router = express.Router()

//3. llamar routes.js en app.js
//4. import user.routes.js
//5. 
router.use('/users', userRouter)
//6. ir a users.routes.js
//7. restaurants
router.use('/restaurants', restaurantRouter)
//8. back to restaurant.route