const http = require('http')
const logger = require('../../utils/log')
const server = http.createServer((request, response) => {
    const url = request.url//获取url的信息

    // logger.debug(response)
    response.writeHead(200, {
        'content-typ': 'application/json;charset=utf-8'
    })
    response.write(`{"url":"${url}"`)
    response.end()
})

// 监听端口
server.listen(8080, () => {
    console.log('localhost:8080')
})