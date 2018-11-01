module.exports = function waterfall(promises) {
  return promises.reduce(
    (wfall, currentPromise) =>
      wfall.then(acc => currentPromise().then(result => acc.concat(result))),
    Promise.resolve([]),
  )
}
