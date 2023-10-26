/* RESTAURANT MODEL */
//1. snippet model
import { DataTypes } from 'sequelize'
import sequelize from '../../config/database/database.js'

const Restaurant = sequelize.define('restaurants', {
  id: {
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
    type: DataTypes.INTEGER,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  rating: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  status: {
    type: DataTypes.ENUM('active', 'disabled'),
    allowNull: false,
    defaultValue: 'active'
  },
})

export default Restaurant

//2. go to restaurants.route