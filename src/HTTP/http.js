import axios from '../axios/axios'
import axioss from 'axios'



export async function axiosFetch(req, method, values) {
  let result = null
  try {
    result = await axios({
      method: method,
      url: req,
      data: { ...values }
    });
    return { data: result.data }
  } catch (error) {
    return {error : error.response}
  }
}

export async function axiosFetchAll( token) {
  console.log("FETCHING ALL ")
  const ALL_TASKS = [
    `/tasks/${token}/active`,
    `/tasks/${token}/passed`,
    `/tasks/${token}/scheduled`,
    `/tasks/${token}/completed`,
    `/tasks/${token}/uncompleted`,
  ]
  let result = null
  const requests = ALL_TASKS.map(url=>{
    return axios({method : 'GET', url : url})
  })
  try {
    result = await axioss.all(requests)
    return result
  } catch (error) {
    return { error: error }
  }
}

