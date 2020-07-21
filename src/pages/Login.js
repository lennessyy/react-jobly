import React, { useState, useContext } from 'react'
import TokenContext from '../TokenContext'
import { useHistory, NavLink } from 'react-router-dom'
import JoblyApi from '../Api'
import "./SignUp.css"

function Login() {
    const { setToken } = useContext(TokenContext)
    const initialState = {
        username: '',
        password: '',
    }
    const [formData, setFormData] = useState(initialState)

    const history = useHistory()

    const handleChange = e => {
        const { name, value } = e.target
        setFormData(data => {
            return {
                ...data,
                [name]: value
            }
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const result = await JoblyApi.authenticate(formData)
            console.log(result)
            setToken(result.token)
            localStorage.token = result.token
            history.push('/')
        } catch (e) {
            alert(e)
        }
    }

    return (
        <div className="SignUp-Login">
            <div className="Signup-Login-buttons row">
                <span className="btn-group" role="group" aria-label="Basic example">
                    <NavLink to="/signup" className="btn btn-primary">Sign Up</NavLink>
                    <NavLink to="#" className="btn btn-primary btn-active">Login</NavLink>
                </span>
            </div>
            <form onSubmit={handleSubmit} className="SignUp-form form-group">
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input required type="username" className="form-control" id="username" name="username" value={formData.username} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input required type="password" className="form-control" name="password" value={formData.password} id="password" onChange={handleChange} />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default Login