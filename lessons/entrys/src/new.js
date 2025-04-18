function getNew(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`New ${name}`)
    }, 10)
  })
}

export default getNew