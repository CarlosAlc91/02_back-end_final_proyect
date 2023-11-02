
import { catchAsync } from '../../errors/index.js'
import { validateRestaurant } from './restaurant.schema.js'
import generateJWT from '../../config/plugins/generate.jwt.js'
import { RestaurantService } from './restaurant.service.js'


const restaurantService = new RestaurantService()

export const findAllRestaurants = catchAsync(async (req, res, next) => {
  //5.
  const restaurants = await restaurantService.findAllRestaurants()

  return res.status(200).json(restaurants)
})

export const createRestaurants = catchAsync(async (req, res, next) => {
  const {
    hasError,
    erroMessages,
    restaurantData
  } = validateRestaurant(req.body)

  if (hasError) {
    return res.status(421).json({
      status: 'error',
      message: erroMessages
    })
  }

  const restaurant = await restaurantService.createRestaurant(restaurantData)

  const token = await generateJWT(restaurantData.id)

  return res.status(201).json({
    token,
    restaurant
  })
})

export const findRestaurantById = catchAsync(async (req, res, next) => {
  const { restaurant } = req
  const token = await generateJWT(restaurant.id)
  return res.status(201).json({
    token,
    restaurant
  })

})

export const updateRestaurant = catchAsync(async (req, res, next) => {
  const { restaurant } = req

  const {
    hasError,
    erroMessages,
    restaurantData
  } = validateRestaurant(req.body)

  if (hasError) {
    return res.status(421).json({
      status: 'error',
      message: erroMessages
    })
  }

  const updatedRestaurant = await restaurantService.updateRestaurant(restaurant,
    restaurantData.name,
    restaurantData.address
  )

  return res.status(201).json(updatedRestaurant)
})

export const deleteRestaurant = catchAsync(async (req, res, next) => {
  const { restaurant } = req

  await restaurantService.deleteRestaurant(restaurant)

  return res.status(204).json(null)
})
