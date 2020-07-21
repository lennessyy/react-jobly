import React, { useState, useContext } from 'react'
import TokenContext from '../TokenContext'
import SignUp from './SignUp'
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
            <SignUp />
        )
    }

}

export default Home