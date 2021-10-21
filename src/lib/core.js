let registry = { configured: false, appId: undefined }

export function configure(appId) {
  registry.configured = true
  registry.appId = appId
  return true
}

export function setRegistry(key, value) {
  registry[key] = value
}

export function getRegistry(key) {
  return registry[key]
}

export function isLoggedIn() {
  return registry?.activeSession || false
}

export function writeMessage(msg) {
  let msgDiv = document.getElementById('messages')
  let p = document.createElement('p')
  p.innerHTML = msg
  msgDiv.append(p)
}
