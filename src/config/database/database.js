/* CONFIGURATION */

//1. IMPORTS
import { Sequelize } from "sequelize"
import { envs } from '../environments/environments.js'

//2. 
const sequelize = new Sequelize(envs.DB_URI, {
  logging: false
})

//3. authentication
export async function authentication() {
  //1. trycatch
  try {
    //2. 
    await sequelize.authenticate()
    console.log('Connection established ✅')
  } catch (error) {
    //3. error
    throw new Error('Authentication error ⚠️', error)
  }
}

//4. synchronization
export async function synchronization() {
  //1. trycatch
  try {
    //2. 
    await sequelize.sync()
    console.log('Database synchronized ✅')
  } catch (error) {
    //3. error
    throw new Error('Synchronization error ⚠️', error)
  }
}

//5. export
export default sequelize