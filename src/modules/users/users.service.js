//1. import user model
import User from "./users.model.js"

//2. export class
export class UserService {
  //1. create functions
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
    return await user.update({ status: true })
  }

  //4 create another service
  async findUserByEmail(email) {
    return await User.findOne({
      where: {
        email,
        status: true
      },
    })
  }

  //5 ir a user.controller.js

}

//3. go to user.schema