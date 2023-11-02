
import jwt from 'jsonwebtoken'
import { envs } from '../environments/environments.js'
 
const generateJWT = id => {
  return new Promise((resolve, reject) => {
    const payload = { id }

    jwt.sign(
      payload,
      envs.SECRET_JWT_SEED,
      {
        expiresIn: envs.JWT_EXPIRE_IN,
      },
      (err, token) => {
        if (err) {
          console.log(err)
          reject(err)
        }
        resolve(token)
      }
    )
  })
}

export default generateJWT