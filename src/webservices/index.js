import axios from 'axios'
import { BASE_URL } from '../config/api'
import { API_KEY } from '../config/api_key'

export function configureAxios() {
    axios.defaults.baseURL = BASE_URL
    axios.defaults.headers.post["Content-Type"] = "application/json"
}

const LIMIT = 10

export function fetchIssues() {
    const url = `/issues/?api_key=${API_KEY}&format=json&sort=store_date:desc&limit=${LIMIT}`
    return axios.get(url)
}
