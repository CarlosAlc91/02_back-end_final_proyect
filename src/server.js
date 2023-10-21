//1. import
import app from "./app.js"
//5. import envs
import { envs } from "./config/environments/environments.js"
//2. 
async function main() {
  //1. try-catch
  try {

  } catch (error) {
    //2. console.error
    console.error(error)
  }
}

//3. 
main()

//4. go to .env
app.listen(envs.PORT, () => {
  console.log(`Server running on port ${envs.PORT}`)
})