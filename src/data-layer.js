export function load () {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('resolving...')
      resolve('yo')
    }, 1000)
  })
}

export function ping() {
  return 'ping'
}
