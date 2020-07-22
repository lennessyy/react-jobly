import React, { useContext } from 'react'
import TokenContext from '../TokenContext'
import { Redirect } from 'react-router-dom'
import './Home.css'

function Home() {
    const { token } = useContext(TokenContext)
    if (token) {
        return (
            <div className="Home">
                <h1>Jobly</h1>
                <p>All the jobs in one, convenient place.</p>
                <h3>Welcome back</h3>
            </div>
        )
    } else {
        return (
            <Redirect to='/login' />
        )
    }

}

export default Home