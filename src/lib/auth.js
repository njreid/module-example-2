import * as core from './core.js'

export function login(username) {
  core.setRegistry('username', username)
  core.setRegistry('activeSession', true)
  core.writeMessage('Logged in to ' + core.getRegistry('appId') + ' as ' + username)
}
