import React, { useContext, useState } from 'react'
import './Job.css'
import { Card, CardBody, CardTitle, CardText } from 'reactstrap'
import JoblyApi from '../Api'
import TokenContext from '../TokenContext'


function Job({ job }) {
    const [state, setState] = useState()
    const { token } = useContext(TokenContext)
    const apply = async () => {
        const response = await JoblyApi.apply(job.id, token, 'applied')
        console.log(response)
        job.state = 'applied'
        setState('applied')
    }

    return (
        <Card>
            <CardBody>
                <CardTitle>
                    <h5>{job.title}</h5>
                    <h6>Salary: {job.salary}</h6>
                    <h6>Equity: {job.equity}</h6>
                </CardTitle>
                <CardText style={{ textAlign: 'end' }}>
                    <small>{job.description}</small>
                    <button onClick={apply} className="btn btn-info">{job.state === 'applied' ? 'Applied' : 'Apply'}</button>
                </CardText>
            </CardBody>
        </Card>
    )
}

export default Job