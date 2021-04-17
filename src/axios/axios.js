import axios from 'axios'
const instance = axios.create({
    baseURL: 'https://matteolecca-task-app-server.herokuapp.com/',
    withCredentials : true,
    sameSite : 'none'
})
export default instance


//LOCAL URL
//https://matteolecca-task-app-server.herokuapp.com/
//baseURL: 'http://192.168.1.146:8080/',
