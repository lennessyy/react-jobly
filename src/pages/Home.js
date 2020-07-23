import React, { useContext } from 'react'
import TokenContext from '../TokenContext'
import { Redirect } from 'react-router-dom'
import './Home.css'

function Home() {
    const { token } = useContext(TokenContext)
    if (token) {
        return (
            <div className="Home">
                <video style={{ width: '40em' }} id="video" playsinline="" muted="" autoplay="" loop data-silent="true" src="https://cdn.dribbble.com/users/244753/screenshots/3773756/workfromhome.gif?vid=1">
                </video>
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