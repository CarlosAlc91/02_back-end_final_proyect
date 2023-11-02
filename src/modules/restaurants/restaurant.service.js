
import Restaurant from './restaurant.model.js'


export class RestaurantService {

  async findAllRestaurants() {
    return await Restaurant.findAll({
      where: {
        status: 'active'
      }
    })
  }

  async createRestaurant(data) {
    return await Restaurant.create(data)
  }

  async findOneRestaurant(id, restaurantId) {
    return await Restaurant.findOne({
      where: {
        id: restaurantId || id,
        status: 'active'
      }
    })
  }

  async updateRestaurant(restaurant, name, address) {
    return await restaurant.update({
      name,
      address
    })
  }

  async deleteRestaurant(restaurant) {
    return await restaurant.update({ status: 'disabled' })
  }
}
