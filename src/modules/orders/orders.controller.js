import { OrdersService } from './orders.service.js'
import { AppError, catchAsync } from '../../errors/index.js'
import { MealsService } from '../meals/meals.service.js'
import { validateOrder } from './orders.schema.js'
import { totalPrice } from '../../common/utils/totalPrice.js'

export const ordersService = new OrdersService()
export const mealsService = new MealsService()

export const findAllOrders = catchAsync(async (req, res, next) => {
  const { sessionUser } = req

  const meals = await ordersService.findAllOrders(sessionUser.id)

  return res.status(201).json(meals)
})

export const createOrder = catchAsync(async (req, res, next) => {
  const { sessionUser } = req

  const {
    hasError,
    errorMessage,
    orderData
  } = validateOrder(req.body)

  if (hasError) {
    return res.status(421).json({
      status: 'error',
      message: errorMessage
    })
  }

  const meal = await mealsService.findOneMeal(orderData.mealId)

  if (!meal) {
    return next(
      new AppError(`Meal with id ${orderData.mealId} not found`, 401)
    )
  }

  orderData.totalPrice = totalPrice(orderData.quantity, meal.price)

  const order = await ordersService.createOrder({
    ...orderData,
    userId: sessionUser.id
  })

  return res.status(201).json(order)
})


export const updateOrder = catchAsync(async (req, res, next) => {
  const { order } = req

  const { sessionUser } = req

  if (order.userId !== sessionUser.id) {
    return next(
      new AppError('Permission denied', 401)
    )
  }

  await ordersService.updateOrder(order)

  return res.status(201).json({
    message: 'order completed'
  })
})

export const deleteOrder = catchAsync(async (req, res, next) => {
  const { order } = req
  const { sessionUser } = req

  if (order.userId !== sessionUser.id) {
    return next(
      new AppError('Permission denied', 401)
    )
  }

  await ordersService.deleteOrder(order)

  return res.status(201).json(null)
})