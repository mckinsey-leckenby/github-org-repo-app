import React from 'react'

function RepoDetails({ details, loading }) {
    if (loading) {
        return (
            <h1 className='loader'>Loading...</h1>
        )
    }
    
 
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
                <label className="label">License:</label>
                <span className='value'></span>
            </div>
           
           

        </div>
    )
}

export default RepoDetails