export function load() {
  return new Promise((resolve, reject) => resolve('yo-test'))
}

export function ping() {
  console.log('ping-test called...')
  return 'ping-test'
}
