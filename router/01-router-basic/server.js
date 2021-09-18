const fs = require('fs')
const http = require('http')
// http.createServer((req, res) => {

//     const urlString = req.url
//     switch (urlString) {
//         case '/':
//             res.end('hello')
//             break
//         case '/home':
//             fs.readFile('./home.html', (err, content) => {
//                 res.end(content)
//             })
//             break
//         case '/app.js':
//             fs.readFile('./app.js', (err, content) => {
//                 res.end(content)
//             })
//             break
//         default:
//             res.end('page 404')
//     }

//     // res.end('ok')
// })
http.createServer((req, res) => {
    const urlString = req.url
    const file = fs.readFilesync(`.${urlString}`)
    res.end(file)

})
    .listen(8080, () => {
        console.log('localhost:8080')
    })