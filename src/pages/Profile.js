import React, { useContext, useState } from 'react'
import './SignUp.css'
import TokenContext from '../TokenContext'
import JoblyApi from '../Api'

function Profile() {
    const { user, token, setUser } = useContext(TokenContext)
    const initialStatus = {
        first_name: user.first_name,
        last_name: user.last_name,
        email: user.email,
        photo_url: user.photo_url || '',
        password: ''
    }
    const [formData, setFormData] = useState(initialStatus)
    const handleChange = e => {
        const { name, value } = e.target
        setFormData(data => {
            return {
                ...data,
                [name]: value
            }
        })
    }

    const handleSubmit = async e => {
        e.preventDefault()
        const result = await JoblyApi.UpdateUser(token, formData)
        if (result.user) {
            alert('Update success!')
            setUser(data => {
                return {
                    ...data,
                    ...formData
                }
            })
        }
    }
    return (
        <div className="SignUp-Login">
            <h2>Profile</h2>
            <form onSubmit={handleSubmit} className="SignUp-form form-group">
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
                <div className="form-group">
                    <label htmlFor="photo_url">Photo URL</label>
                    <input type="text" className="form-control" name="photo_url" value={formData.photo_url} id="photo_url" onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Re-enter password</label>
                    <input type="password" className="form-control" name="password" value={formData.password} id="password" onChange={handleChange} />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default Profile