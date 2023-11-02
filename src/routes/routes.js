
import {Router} from 'express'
import { router as userRouter } from '../modules/users/users.routes.js'
import { router as restaurantRouter } from '../modules/restaurants/restaurant.route.js'
import { router as mealRouter } from '../modules/meals/meals.routes.js'
import { router as orderRouter } from '../modules/orders/orders.routes.js'

export const router = Router()

router.use('/users', userRouter)
router.use('/restaurants', restaurantRouter)
router.use('/meals', mealRouter)
router.use('/orders', orderRouter)
