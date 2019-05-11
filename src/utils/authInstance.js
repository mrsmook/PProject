import auth0 from 'auth0-js'
import config from '../_config'
import { initializeXsrfToken } from './xsrf'

export default function WebAuth() {
  // set xsrf token
  const token = initializeXsrfToken() // eslint-disable-line

  return new auth0.WebAuth({
    domain: config.auth0.domain,
    clientID: config.auth0.clientId,
    audience: `https://whoop.eu.auth0.com/api/v2/`,
    responseType: 'token id_token',
    scope: 'openid email profile'
  })
}
