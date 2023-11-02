
import { Sequelize } from "sequelize"
import { envs } from '../environments/environments.js'


const sequelize = new Sequelize(envs.DB_URI, {
  logging: false
})


export async function authentication() {

  try {
   
    await sequelize.authenticate()
    console.log('Connection established ✅')
  } catch (error) {
    
    throw new Error('Authentication error ⚠️', error)
  }
}


export async function synchronization() {
  
  try {
     
    await sequelize.sync()
    console.log('Database synchronized ✅')
  } catch (error) {
    
    throw new Error('Synchronization error ⚠️', error)
  }
}


export default sequelize