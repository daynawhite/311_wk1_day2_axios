// import axios here
const axios = require('axios')
// Please note that it is normally not considered best practice to commit 
// api keys to github as it presents a security risk. It is done here only 
// for practice purposes as we are sharing the same account
const api_key = 'd771b19ef336ed8381def3a60b574464'

async function discoverMovie() {
  const url = `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}`
  result = await axios(url)
  // console.log(result)
  return result
  }
  discoverMovie()

async function getMovieById(id) {
  const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${api_key}`
  // code here
  result = await axios(url)
  // console.log(result.data)
  return result.data
  }
  discoverMovie(500)


async function getMovieByIdFailure() {
  const fakeId = 5783 // FAKE ID HERE
  const url = `https://api.themoviedb.org/3/movie/${fakeId}?api_key=${api_key}`
  // code here
  try {result = await axios(url)
    return response.status}
  catch(err) {
    return err.response.status
  }
  }

module.exports = {
  discoverMovie,
  getMovieById,
  getMovieByIdFailure
}