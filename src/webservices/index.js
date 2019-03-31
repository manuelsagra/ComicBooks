import axios from 'axios'
import { BASE_URL } from '../config/api'
import { API_KEY } from '../config/api_key'
import qs from 'qs'

export function configureAxios() {
    axios.defaults.baseURL = BASE_URL
    axios.defaults.headers.post["Content-Type"] = "application/json"
}

export function fetchIssues(params) {
    const url = `/issues/?api_key=${API_KEY}&format=json&sort=store_date:desc&` + qs.stringify(params, { skipNulls: true })
    return axios.get(url)
}
