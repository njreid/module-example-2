import * as core from './core.js'

export function readFile(path) {
  if (!core.isLoggedIn()) {
    core.writeMessage('Not logged in')
    return
  }
  core.writeMessage('Reading file from ' + path)
  return 'SADFADSF ASDF FILE CONTENTS BLAH'
}
