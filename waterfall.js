export default function waterfall(promises) {
  return promises.reduce((wfall, currentPromise) => wfall.then(currentPromise), Promise.resolve())
}