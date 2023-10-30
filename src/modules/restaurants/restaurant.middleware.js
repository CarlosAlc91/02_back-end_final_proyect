//1.
import { AppError, catchAsync } from "../../errors/index.js"
import { RestaurantService } from "./restaurant.service.js"

//5. instanciar el servicio
const restaurantService = new RestaurantService()

//2. 
export const validateExistRestaurant = catchAsync(async (req, res, next) => {
  //3.
  const { id, restaurantId } = req.params

  //4. go to restaurant.service
  //5.
  const restaurant = restaurantService.findOneRestaurant(id, restaurantId)

  //6. validacion sino existe ele restaurantr
  if (!restaurant) {
    return next(new AppError('Restaurant not found', 404))
  }

  //7. agregar el restaurant por la req
  req.restaurant = restaurant
  next()

  //8. restaurant.route
})