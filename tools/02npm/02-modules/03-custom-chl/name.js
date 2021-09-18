const name = {
    surname: 'zhang',
    sayName() {
        console.log(this.surname)
    }
}
const age = {
    age: 100
}
module.exports = {
    name,
    age
}
exports.age = age
exports.name = name

// export 是 module.exports的引用,相当于 const exports =module.exports