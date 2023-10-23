

//1. traer la data de las validaciones
export const extractValidationData = (results) => {
  let erroMessages
  let data
  const hasError = !results.success

  //2. validatre for errors
  if (hasError) erroMessages = JSON.parse(results.error.message)
  //3. validate if theres no error
  if (!hasError) data = results.data

  //4. return
  return {
    hasError,
    erroMessages,
    data
  }

}

//2. go to users.schema