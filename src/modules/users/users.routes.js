//1. imports
import express from 'express'
import { deleteUser, loginUser, registerUser, updateUser } from './users.controller.js'

//2. 
export const router = express.Router()

//3. createa a route.js file
//4. creacion de endpoints
router.post('/login', loginUser)
router.post('/register', registerUser)

router
  .route('/:id')
  .patch(updateUser)
  .delete(deleteUser)

//5. go to users.controller.js to create controller functions
//6. import controller functions
//7. go to errors folder and create files