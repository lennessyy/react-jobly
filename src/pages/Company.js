import React from 'react'
import './Company.css'
import { Card, CardBody, CardTitle, CardText } from 'reactstrap'
import { useHistory } from 'react-router-dom'

function Company({ company }) {
    const defaultImage = `https://png.pngtree.com/png-clipart/20190520/original/pngtree-2-5d-building-2-5d-bungalow-building-bungalow-png-image_3920651.jpg`
    const imgSrc = company.logo_url.length === 0 ? defaultImage : company.logo_url
    const history = useHistory()
    const toCompanyDetails = () => {
        history.push(`/companies/${company.handle}`)
    }

    return (
        <Card onClick={toCompanyDetails}>
            <CardBody>
                <CardTitle>
                    <h6>{company.name}</h6> <img src={imgSrc} alt={`${company.name} logo`} /></CardTitle>
                <CardText>{company.description}</CardText>
            </CardBody>
        </Card>
    )
}

export default Company