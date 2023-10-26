/* funciones controladoresa */
//1. imopr
import { catchAsync } from '../../errors/index.js'
//4. improt service
import { RestaurantService } from './restaurant.service.js'

//5. instanciar service
const restaurantService = new RestaurantService()

//2. crear funciones controladoras
export const findAllRestaurants = catchAsync(async (req, res, next) => {
  //5.
  const restaurants = await restaurantService.findAllRestaurants()

  return res.status(200).json(restaurants)
})

export const createRestaurants = catchAsync(async (req, res, next) => {
  //6.
  const {
    name,
    address,
    rating
  } = req.body
  //7. go to service.js
  //8. 
  const restaurant = await restaurantService.createRestaurant({
    name,
    address,
    rating
  })

  return res.status(201).json(restaurant)
  //9. go to service
})

export const findOneRestaurant = catchAsync(async (req, res, next) => { })

export const updateRestaurant = catchAsync(async (req, res, next) => { })

export const deleteRestaurant = catchAsync(async (req, res, next) => { })

export const createRestaurantReview = catchAsync(async (req, res, next) => { })

export const updateReview = catchAsync(async (req, res, next) => { })

export const deleteReview = catchAsync(async (req, res, next) => { })

//3 y 6. ir a restaurant.service