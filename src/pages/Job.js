import React from 'react'
import './Job.css'
import { Card, CardBody, CardTitle, CardText } from 'reactstrap'

function Job({ job }) {
    return (
        <Card>
            <CardBody>
                <CardTitle>
                    <h5>{job.title}</h5>
                    <h6>Salary: {job.salary}</h6>
                    <h6>Equity: {job.equity}</h6> </CardTitle>
                <CardText>{job.description}</CardText>
            </CardBody>
        </Card>
    )
}

export default Job