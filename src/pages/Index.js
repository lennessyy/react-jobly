import React from 'react'
import Company from './Company'
import Job from './Job'
import { v4 as uuid } from 'uuid'
import './Index.css'

function Index({ items, itemType }) {
    if (itemType === 'company') {
        return (
            <div className="Index">
                <div className="Index-search">
                    <form className="form-inline">
                        <input className="form-control form-control-lg flex-grow-1" name="search" placeholder="Enter search term" />
                        <button type="submit" className="btn btn-lg btn-primary">Submit</button>
                    </form>
                </div>
                <div className="Index-CardList">
                    {items.map(i => <Company key={uuid()} company={i} />)}
                </div>
            </div>
        )
    } else if (itemType === 'job') {
        return (
            <div className="Index">
                <div className="Index-search">
                    <form className="form-inline">
                        <input className="form-control form-control-lg flex-grow-1" name="search" placeholder="Enter search term" />
                        <button type="submit" className="btn btn-lg btn-primary">Submit</button>
                    </form>
                </div>
                <div className="Index-CardList">
                    {items.map(i => <Job key={uuid()} job={i} />)}
                </div>
            </div>
        )
    }

}

export default Index