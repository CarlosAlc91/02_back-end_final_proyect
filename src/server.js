//1. import
import app from "./app.js"
import { initModel } from "./config/database/associations.js"
import { authentication, synchronization } from "./config/database/database.js"

//5. import envs
import { envs } from "./config/environments/environments.js"
//2. 
async function main() {
  //1. try-catch
  try {
    //3. after creating functions in db.js importing
    await authentication()
    initModel()
    await synchronization()
  } catch (error) {
    //2. console.error
    console.error(error)
  }
}

//3. 
main()

//4. go to env.js and create env vars
app.listen(envs.PORT, () => {
  //1. after creating and importing env vars
  console.log(`Server running on port ${envs.PORT}`)
})