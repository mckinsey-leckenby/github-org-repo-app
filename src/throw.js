
 
//  const searchRepos = async (orgName) => {
//   const url = `https://api.github.com/orgs/${orgName}/repos`


//   const response = await fetch(url);
//   const responseJson = await response.json();

//   if (responseJson) {
//     console.log("Worked!!");
//     setIsLoading(false)
//     setRepos(responseJson)
//     // setCount(responseJson.length)
//     console.log(responseJson)
//   } else {
//     console.log("Did not work!")
//     console.log(responseJson)
//   }
// };


//  const getDetails = async (repoName) => {
//   const url = `https://api.github.com/orgs/${orgName}/${repoName}`


//   const response = await fetch(url);
//   const responseJson = await response.json();

//   if (responseJson) {
//     console.log("Worked!!");
//     setDetailsLoading(false)
//     setDetails(responseJson)
//     // setCount(responseJson.length)
//     console.log(responseJson)
//   } else {
//     console.log("Did not work!")
//     console.log(responseJson)
//   }
// };