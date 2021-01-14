import axios from 'axios'
const instance = axios.create({
    baseURL: 'http://192.168.1.146:8080',
    withCredentials : true,
    sameSite : 'none'
})
export default instance