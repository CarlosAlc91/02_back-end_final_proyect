
import { DataTypes } from 'sequelize'
import sequelize from '../../config/database/database.js'

const Review = sequelize.define('review', {
  id: {
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
    type: DataTypes.INTEGER,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  comment: {
    type: DataTypes.STRING,
    allowNull: false
  },
  restaurantId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  rating: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  status: {
    type: DataTypes.ENUM('active', 'deleted'),
    allowNull: false,
    defaultValue: 'active'
  }
})

export default Review