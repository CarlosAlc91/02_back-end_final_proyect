/* SERVICIOS */
//3. import model
import Restaurant from './restaurant.model.js'

//1 export service
export class RestaurantService {
  //4. regresando de controller creacion de metodos
  async findAllRestaurants() {
    return await Restaurant.findAll({
      where: {
        status: 'active'
      }
    })
  }
  //5. got ot controllers
  //6.
  async createRestaurant(data) {
    return await Restaurant.create(data)
  }
  //7. controller
}

//2. ir a restaurant.controller a instanciar