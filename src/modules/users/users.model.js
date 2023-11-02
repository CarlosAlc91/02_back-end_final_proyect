
import { DataTypes } from "sequelize"
import sequelize from '../../config/database/database.js'
import { encryptedPassword } from "../../config/plugins/encryptedPassword.js"

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

}, {
  hooks: {
    beforeCreate: async (user) => {

      user.password = await encryptedPassword(user.password)
     
    }
  }
})


export default User