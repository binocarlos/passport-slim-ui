import 'isomorphic-fetch'

const getAPI = url => {
  return fetch(url)
    .then(response =>
      response.json().then(json => ({ json, response }))
    )
    .then(({ json, response }) => {
      if (!response.ok) {
        return Promise.reject(json);
      }
      return json
    })
    .then(
      response => ({ response }),
      error => ({ error: error.message || 'Something bad happened.' })
    )
}

const fetchUser = url => getAPI(url)

const api = {
  fetchUser
}

export default api