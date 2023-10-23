/* encriptar passwords */
//1.
import bcrypt from 'bcrypt'

//2. 
export const encryptedPassword = async (password) => {
  //1. generacion de saltos
  const salt = await bcrypt.genSalt(12)
  //2.
  return await bcrypt.hash(password, salt)
}

//3. ir a users.model