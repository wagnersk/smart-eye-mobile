import axios from 'axios'

const api = axios.create({
    baseURL: 'https://backend-sensor.herokuapp.com/'
})

export default api