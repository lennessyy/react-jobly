import React, { useState, useContext, useEffect } from 'react'
import { Switch, Route } from 'react-router-dom'
import Index from './pages/Index'
import Home from './pages/Home'
import TokenContext from './TokenContext'
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
            })
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
            <Route exact path="/companies">
                <Index items={companies} itemType='company' />
            </Route>
            <Route exact path="/companies/:id" >
                Company details
            </Route>
            <Route exact path="/jobs">
                <Index items={jobs} itemType='job' />
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