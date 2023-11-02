import { Router } from 'express'
import { deleteUser, loginUser, registerUser, updateUser } from './users.controller.js'
import {
  protect,
  protectAccountOwner,
} from './auth.middleware.js'

export const router = Router()

router.post('/login', loginUser)
router.post('/register', registerUser)

router.use(protect)

router
  .patch('/:id', protectAccountOwner, updateUser)
  .delete('/:id', protectAccountOwner, deleteUser)
