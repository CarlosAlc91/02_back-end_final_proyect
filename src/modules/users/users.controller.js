/* funciones controladoras */

//1. crear funciones

export const loginUser = catchAsync(async (req, res, next) => {
  return res.status(200).json()
})
export const registerUser = catchAsync(async (req, res, next) => {
  return res.status(200).json()
})

export const updateUser = catchAsync(async (req, res, next) => {
  return res.status(200).json()
})
export const deleteUser = catchAsync(async (req, res, next) => {
  return res.status(200).json()
})

//2. go to users.routes.js and import functions