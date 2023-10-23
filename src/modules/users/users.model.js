//1. imports datatypes and sequelize
import { DataTypes } from "sequelize"
import sequelize from '../../config/database/database.js'
import { encryptedPassword } from "../../config/plugins/encryptedPassword.js"
//2. model createion
const User = sequelize.define('users', {
  id: {
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
    type: DataTypes.INTEGER
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  role: {
    type: DataTypes.ENUM('normal', 'admin'),
    defaultValue: 'normal',
    allowNull: false
  },
  status: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
    allowNull: true
  }
  //5. encriptacion de passwords
}, {
  hooks: {
    beforeCreate: async (user) => {
      //6. ir a config => plugins
      //7. update password
      user.password = await encryptedPassword(user.password)
      //8. go to user.controller
    }
  }
})

//4. go to users.service.js
//3. export
export default User