import React, { useState, useContext, useEffect } from 'react'
import { Switch, Route } from 'react-router-dom'
import Index from './pages/Index'
import Home from './pages/Home'
import SignUp from './pages/SignUp'
import Login from './pages/Login'
import Profile from './pages/Profile'
import TokenContext from './TokenContext'
import CompanyDetails from './pages/CompanyDetails'
import JoblyApi from './Api'

function Routes() {
    const [companies, setCompanies] = useState([])
    const [jobs, setJobs] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const { token } = useContext(TokenContext)
    useEffect(() => {
        async function getData() {
            const companiesReq = JoblyApi.getCompanies(token)
            const jobsReq = JoblyApi.getJobs(token)
            const result = await Promise.all([companiesReq, jobsReq])
            setCompanies(result[0].companies)
            setJobs(result[1].jobs)
        }
        if (token) {
            getData().then(() => {
                setIsLoading(false)
            }).catch(
                (error) => {
                    console.log(error)
                }
            )
        } else {
            setIsLoading(false)
            return
        }
    }, [token])

    if (isLoading) {
        return (<p>Loading...</p>)
    }

    return (
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route exact path="/signup">
                <SignUp />
            </Route>
            <Route exact path="/login">
                <Login />
            </Route>
            <Route exact path="/profile">
                <Profile />
            </Route>
            <Route exact path="/companies">
                <Index items={companies} setCompanies={setCompanies} itemType='company' />
            </Route>
            <Route exact path="/companies/:id" >
                <CompanyDetails />
            </Route>
            <Route exact path="/jobs">
                <Index items={jobs} itemType='job' setJobs={setJobs} />
            </Route>
            <Route exact path="/jobs/:id">
                Job details
            </Route>

            <Route>
                <div>
                    <h2>404</h2>
                    <p>Captain, I think we got lost.</p>
                </div>
            </Route>
        </Switch>
    )
}

export default Routes