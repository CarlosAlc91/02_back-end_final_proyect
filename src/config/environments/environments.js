/* ENVIRONMENTS VARIABLES CONFIGURATIONS */

//1. imports
import 'dotenv/config'
import env from 'env-var'

//2. env var obj
export const envs = {
  //1.
  PORT: env.get('PORT').required().asPortNumber()
}