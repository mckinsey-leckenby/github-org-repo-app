import React, {useState} from 'react'

function RepoDetails({ details, loading }) {


    if (loading) {
        return (
            <h1 className='loader'>Loading...</h1>
        )
    }
    const visit = (obj, fn) => {
        const values = Object.values(obj)
    
        values.forEach(val => 
            val && typeof val === "object" ? visit(val, fn) : fn(val))
    }

    const print = (val) => console.log(val)

visit(details, print)

    return (
      
 
        <div className="repo-details-container">
      
            <div className='details-row'>
           
                <label className="label">Name:</label>
                <span className='value'>{details.name}</span>
            </div>
            <div className='details-row'>
                <label className="label">Watchers:</label>
                <span className='value'>{details.watchers}</span>
            </div>
            <div className='details-row'>
                <label className="label">Forks Count:</label>
                <span className='value'>{details.forks}</span>
            </div>
            <div className='details-row'>
                <label className="label">Open Issues:</label>
                <span className='value'>{details.open_issues_count}</span>
            </div>
            <div className='details-row'>
                <label className="label">Language:</label>
                <span className='value' >{details.language}</span>
                
                </div>
               
                </div>
           
 
    )
}

export default RepoDetails