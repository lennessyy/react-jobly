import axios from 'axios'

const BASE_API_URL = "http://localhost:3001";

class JoblyApi {
    static async getCompanies(token) {
        const result = await axios.get(`${BASE_API_URL}/companies`, { params: { _token: token } })
        console.log(result)
        return result.data
    }

    static async getJobs(token) {
        const result = await axios.get(`${BASE_API_URL}/jobs`, { params: { _token: token } })
        console.log(result)
        return result.data
    }

    static async register({ username, password, first_name, last_name, email }) {
        const response = await axios.post(`${BASE_API_URL}/users`, {
            username, password, first_name, last_name, email
        })
        return response.data
    }
}

export default JoblyApi