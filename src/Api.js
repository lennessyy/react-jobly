import axios from 'axios'
import jwt from 'jsonwebtoken'

const BASE_API_URL = process.env.ApiEndpoint || "http://localhost:3001";

class JoblyApi {
    static async getCompanies(token, query = {}) {
        const result = await axios.get(`${BASE_API_URL}/companies`, {
            params: { _token: token, ...query }
        })
        console.log(result)
        return result.data
    }

    static async getJobs(token, query) {
        const result = await axios.get(`${BASE_API_URL}/jobs`, { params: { _token: token, ...query } })
        console.log(result)
        return result.data
    }

    static async register({ username, password, first_name, last_name, email }) {
        try {
            const response = await axios.post(`${BASE_API_URL}/users`, {
                username, password, first_name, last_name, email
            })
            return response.data
        } catch (e) {
            return e
        }
    }

    static async authenticate({ username, password }) {
        try {
            const response = await axios.post(`${BASE_API_URL}/login`, {
                username, password
            })
            return response.data
        } catch (e) {
            return e
        }
    }

    static async getUser(token) {
        try {
            const { username } = jwt.decode(token)
            const response = await axios.get(`${BASE_API_URL}/users/${username}`, { params: { _token: token } })
            return response.data
        } catch (e) {
            return e
        }
    }

    static async UpdateUser(token, items) {
        try {
            const { username } = jwt.decode(token)
            const response = await axios.patch(`${BASE_API_URL}/users/${username}`, { ...items, _token: token })
            return response.data
        } catch (e) {
            return e
        }
    }

    static async getCompany(token, handle) {
        try {
            const response = await axios.get(`${BASE_API_URL}/companies/${handle}`, { params: { _token: token } })
            return response.data
        } catch (e) {
            return e
        }
    }

    static async apply(id, token, state) {
        try {
            const response = await axios.post(`${BASE_API_URL}/jobs/${id}/apply`, { _token: token, state })
            return response.data
        } catch (e) {
            return e
        }
    }
}

export default JoblyApi