import React, { useState, useContext } from 'react'
import TokenContext from '../TokenContext'
import { NavLink, useHistory } from 'react-router-dom'
import JoblyApi from '../Api'
import "./SignUp.css"

function SignUp() {
    const { setToken } = useContext(TokenContext)
    const history = useHistory()
    const initialState = {
        username: '',
        password: '',
        first_name: '',
        last_name: '',
        email: ''
    }
    const [formData, setFormData] = useState(initialState)

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
            const result = await JoblyApi.register(formData)
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
            <h1>Jobly</h1>
            <p>All the jobs in one, convenient place.</p>
            <div className="Signup-Login-buttons row">
                <span className="btn-group" role="group" aria-label="Basic example">
                    <NavLink to="#" className="btn btn-primary btn-active">Sign Up</NavLink>
                    <NavLink to="/login" className="btn btn-primary">Login</NavLink>
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
                <div className="form-group">
                    <label htmlFor="first_name">First Name</label>
                    <input required type="text" className="form-control" name="first_name" value={formData.first_name} id="first_name" onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="last_name">Last Name</label>
                    <input required type="text" className="form-control" name="last_name" value={formData.last_name} id="last_name" onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="text" className="form-control" name="email" value={formData.email} id="email" onChange={handleChange} aria-describedby="emailHelp" />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <button type="submit" className="btn btn-primary">Sign Up</button>
            </form>
        </div>
    )
}

export default SignUp