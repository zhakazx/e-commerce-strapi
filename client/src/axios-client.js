import axios from 'axios'

const axiosClient = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    headers: {
        Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}`
    }
})

export default axiosClient