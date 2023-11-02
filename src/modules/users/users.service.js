
import User from "./users.model.js"

export class UserService {

  async createUser(data) {
    return await User.create(data)
  }

  async findOneUser(id) {
    return await User.findOne({
      where: {
        id,
        status: true
      }
    })
  }

  async updateUser(user, data) {
    return await user.update(data)
  }

  async deleteUser(user) {
    return await user.update({ status: false })
  }

  async findUserByEmail(email) {
    return await User.findOne({
      where: {
        email,
        status: true
      },
    })
  }

}
