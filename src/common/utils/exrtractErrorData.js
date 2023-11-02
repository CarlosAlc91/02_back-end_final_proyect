
export const extractValidationData = (results) => {
  let erroMessages
  let data
  const hasError = !results.success

  if (hasError) erroMessages = JSON.parse(results.error.message)
 
  if (!hasError) data = results.data


  return {
    hasError,
    erroMessages,
    data
  }

}
