
import './App.css';
import React, { useState } from 'react'
import RepoDetails from './RepoDetails';
import axios from 'axios'


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
      onClick={() => getDetails(repo.name)} key={repo.id}>
        <img src={repo.owner.avatar_url} alt={repo.name} width="40px" />
        <h2 className='repo-name'>
          {repo.name.charAt(0).toUpperCase() + repo.name.slice(1)}
        </h2>
      </div>
      
    )
  }

  function getDetails(name) {
    setDetailsLoading(true)
    axios({
      method: 'get',
      url: `https://api.github.com/repos/${orgName}/${name}`,

    }).then(res => {
      if (res) {
        console.log("Worked!!");
        setDetailsLoading(false)
        setDetails(res.data)
        console.log(res.data)
      } else {
        console.log("Did not work!")
        console.log(res)
      }
    })
  }

  return (
    <div className="page">
      <div className="landing-page-container">
        <div className="left-side">
          <form className='form'>
            <input
              className='input'
              value={orgName}
              placeholder="Search Organization"
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
