module.exports = function waterfall(promises) {
  return promises.reduce((wfall, currentPromise) => wfall.then(acc => currentPromise().then(result => Array.concat(acc, result))), Promise.resolve([]))
}
