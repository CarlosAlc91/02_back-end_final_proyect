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

//4. funcion par verificar password
export const verifyPassword = async (bodyPassword, userPassword) => {
  return await bcrypt.compare(bodyPassword, userPassword)
}

//5. go to user.controller


//3. ir a users.model