const _ = require('lodash')
// let arr = [1, 5, 6, 7]
// let arr2 = s.chunk(arr, 2)
// console.log(arr2)
function myChunk(arr) {
    let arr2 = _.chunk(arr, 2)
    return arr2
}

module.exports = myChunk