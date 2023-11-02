
import { AppError, catchAsync } from '../../errors/index.js'
import { OrdersService } from './orders.service.js'

const ordersService = new OrdersService

export const validateOrder = catchAsync(async (req, res, next) => {
  const { id } = req.params

  const order = await ordersService.findOrderById(id)

  if (!order) {
    return next(new AppError(`Order with id ${id} not found`, 401))
  }

  req.order = order
  next()
})