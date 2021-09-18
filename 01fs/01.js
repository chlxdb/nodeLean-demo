var fs = require('fs')
// readFile('01.txt', function (error, data) {
//     console.log(data.toString())
// })
console.log('xxhhlll')
fs.writeFile('./hellow.txt', 'hellow', (error, data) => {
    if (error) {
        console.log(error)
    } else {
        console.log("文件创建成功")
    }

})

