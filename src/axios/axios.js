import axios from 'axios'
const instance = axios.create({
    baseURL: 'https://matteolecca-todolist.herokuapp.com/',
    withCredentials : true,
    sameSite : 'none'
})
export default instance