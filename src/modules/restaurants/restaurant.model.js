/* RESTAURANT MODEL */
//1. snippet model
import { DataTypes } from 'sequelize'
import sequelize from '../../config/database/database.js'

const ModelName = sequelize.define('modelName', {
  id: {
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
    type: DataTypes.INTEGER,
  },
  field1: {
    type: DataTypes.STRING,
    allowNull: false
  },
})

export default ModelName