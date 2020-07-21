import React, { useContext, useState, useEffect } from 'react'
import Job from './Job'
import JoblyApi from '../Api'
import { v4 as uuid } from 'uuid'
import TokenContext from '../TokenContext'
import { useParams } from 'react-router-dom'
import './CompanyDetails.css'

function CompanyDetails() {
    const { token } = useContext(TokenContext)
    const [isLoading, setIsLoading] = useState(true)
    const [company, setCompany] = useState()
    const { id } = useParams()

    useEffect(() => {
        JoblyApi.getCompany(token, id).then((data) => {
            console.log(data)
            setCompany(data.company)
            setIsLoading(false)
        }).catch(error => console.log(error))
    }, [])


    if (isLoading) return <p>Loading</p>

    return (
        <div className="CompanyDetails">
            <div className="CompanyDetails-intro">
                <h2>{company.name}</h2>
                <p>{company.description}</p>
            </div>
            <div className="CompanyDetails-jobs">
                {company.jobs.map(job => <Job key={uuid()} job={job} />)}
            </div>
        </div>
    )
}

export default CompanyDetails