import React, { useContext } from 'react'
import Company from './Company'
import Job from './Job'
import { v4 as uuid } from 'uuid'
import './Index.css'
import JoblyApi from '../Api'
import TokenContext from '../TokenContext'
function Index({ items, itemType, setCompanies, setJobs }) {
    const { token } = useContext(TokenContext)

    const handleClick = async e => {
        e.preventDefault()
        const search = document.querySelector('#search').value
        if (itemType === 'company') {
            const result = await JoblyApi.getCompanies(token, { search: search })
            setCompanies(result.companies)
        } else if (itemType === 'job') {
            const result = await JoblyApi.getJobs(token, { search: search })
            setJobs(result.jobs)
        }
    }

    let cards = []
    if (itemType === 'company') {
        cards = items.map(i => <Company key={uuid()} company={i} />)
    }
    else {
        cards = items.map(i => <Job key={uuid()} job={i} />)
    }

    return (
        <div className="Index">
            <div className="Index-search">
                <form className="form-inline">
                    <input className="form-control form-control-lg flex-grow-1" id="search" name="search" placeholder="Enter search term" />
                    <button onClick={handleClick} type="submit" className="btn btn-lg btn-primary">Submit</button>
                </form>
            </div>
            <div className="Index-CardList">
                {cards}
            </div>
        </div>
    )
}


export default Index