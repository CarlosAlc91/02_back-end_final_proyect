
import app from "./app.js"
import { initModel } from "./config/database/associations.js"
import { authentication, synchronization } from "./config/database/database.js"

import { envs } from "./config/environments/environments.js"

async function main() {

  try {

    await authentication()
    initModel()
    await synchronization()
  } catch (error) {

    console.error(error)
  }
}

main()

app.listen(envs.PORT, () => {
  console.log(`Server running on port ${envs.PORT}`)
})