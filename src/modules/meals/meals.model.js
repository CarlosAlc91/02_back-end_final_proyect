import { DataTypes } from 'sequelize'
import sequelize from '../../config/database/database.js'

const Meals = sequelize.define('meals', {
  id: {
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
    type: DataTypes.INTEGER,
  },

  name: {
    type: DataTypes.STRING(200),
    allowNull: false
  },

  price: {
    type: DataTypes.FLOAT,
    allowNull: false
  },

  restaurantId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },

  status: {
    type: DataTypes.ENUM('active', 'inactive'),
    defaultValue: 'active',
    allowNull: false
  }

})

export default Meals