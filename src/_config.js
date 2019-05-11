
const config = {
  // auth0 setup
  auth0: {
    domain: 'whoop.eu.auth0.com',
    clientId: 'WuGOvUiz6qqha5joKBsvAZzLqjwtCJ4i',
    callbackPath: '/callback'
  },
  algolia: {
    appId: '2N3HKL3FCG',
    apiKey: '5e909929c7bf15d5c9361977149fd941',
    index: 'videos'
  },
  // api endpoints
  api: {
    hello: '/.netlify/functions/hello',
    getMovies: '/.netlify/functions/protected-get-movies',
    getShowtimes: '/.netlify/functions/get-movie-showtimes'
  }
}

export default config
