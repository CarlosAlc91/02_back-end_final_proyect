/* ENVIRONMENTS VARIABLES CONFIGURATIONS */

//1. imports
import 'dotenv/config'
import env from 'env-var'

//2. env var obj
export const envs = {
  //1.
  PORT: env.get('PORT').required().asPortNumber(),
  //2.
  NODE_ENV: env.get('NODE_ENV').required().asString(),
  DB_URI: env.get('DB_URI').required().asString(),
  //3.
  JWT_EXPIRE_IN: env.get('JWT_EXPIRE_IN').required().asString(),
  SECRET_JWT_SEED: env.get('SECRET_JWT_SEED').required().asString()
}
//4. go to generate.jwt.js