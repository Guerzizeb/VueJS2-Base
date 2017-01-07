export const domain = 'http://localhost:8000'
export const apiDomain = domain + '/api'

export const getHeader = function () {
  const authUser = JSON.parse(window.localStorage.getItem('authUser'))
  const headers = {
    'Accept': 'application/json',
    'Authorization': 'Bearer ' + authUser.access_token
  }
  return headers
}
