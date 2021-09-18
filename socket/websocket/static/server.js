const http = require('http')
const path = require('path')
const readFileStatic = require('./readFile-static')

http.createServer(async (req, res) => {
    let urlString = req.url
    let pathFileName = path.join(__dirname, './public', urlString)
    // let data = readFileStatic(pathFileName)
    let { data, mimeType } = await readFileStatic(pathFileName, res)
    res.writeHead(200, {
        'content-type': mimeType
    })
    res.write(data)
    res.end()
})
    .listen(8080, () => {
        console.log('localhost:8080')
    })