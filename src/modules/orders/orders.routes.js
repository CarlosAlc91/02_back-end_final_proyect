import { Router } from "express"
import {
  findAllOrders,
  createOrder,
  updateOrder,
  deleteOrder
} from './orders.controller.js'
import { protect } from '../users/auth.middleware.js'
import { validateOrder } from "./orders.schema.js"

export const router = Router()

router.use(protect)

router.get('/', findAllOrders)
router.post('/', createOrder)

router
  .route('/:id')
  .patch(validateOrder, updateOrder)
  .delete(validateOrder, deleteOrder)