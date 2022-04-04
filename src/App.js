
import './App.css';
import React, { useState } from 'react'
import RepoDetails from './RepoDetails';
import axios from 'axios'
import { Card, Button } from 'react-bootstrap'

function App() {

  const [orgName, setOrgName] = useState("")
  const [loading, setIsLoading] = useState(false)
  const [repos, setRepos] = useState([])
  const [details, setDetails] = useState({})
  const [detailsLoading, setDetailsLoading] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    searchRepos()
  }


  function searchRepos() {
    setIsLoading(true)
    axios({
      method: 'get',
      url: `https://api.github.com/orgs/${orgName}/repos`,
    }).then(res => {
      if (res) {
        console.log("Worked!!");
        setIsLoading(false)
        setRepos(res.data)
        console.log(res.data)
      } else {
        console.log("Did not work!")
        console.log(res)

      }
    })
 }

  function renderRepo(repo) {
    return (
      
      <div className="row" 
      onClick={() => 
      console.log("name:", repo.name, 
      "watchers:", repo.watchers,
      "forks:", repo.forks,
      "open issues:", repo.open_issues_count,
      "license:", repo.license,
      )} 

    
      key={repo.id}>
        <img src={repo.owner.avatar_url} width="40px" />
        <h2 className='repo-name'>
          {repo.name.charAt(0).toUpperCase() + repo.name.slice(1)}
        </h2>
      </div>
      
    )
  }

  // function getDetails(name) {
  //   setDetailsLoading(true)
  //   axios({
  //     method: 'get',
  //     url: `https://api.github.com/orgs/${orgName}/${name}`,
  //   }).then(res => {
  //     if (res) {
  //       console.log("Worked!!");
  //       setDetailsLoading(false)
  //       setDetails(res.data)
  //       console.log(res.data)
  //     } else {
  //       console.log("Did not work!")
  //       console.log(res)
  //     }
  //   })
  // }

  return (
    <div className="page">
      <div className="landing-page-container">
        <div className="left-side">
          <form className='form'>
            <input
              className='input'
              value={orgName}
              placeholder="Search Organizations..."
              onChange={e => setOrgName(e.target.value)}
            />
            <button className="button" onClick={handleSubmit} >{loading ? "Searching..." : "Search"} </button>
          </form>
          <div className="results-container">
            {repos.map(renderRepo)}
          </div>
        </div>
        <RepoDetails details={details} loading={detailsLoading} />
      </div>
    </div>
  );
}

export default App;
