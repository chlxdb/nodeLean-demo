var log4js = require('log4js')
// var logger = log4js.getLogger();
// logger.level = "debug";// 什么样的日志才记录到日志里，此为调试信息就进去

log4js.configure({
    appenders: { cheese: { type: "file", filename: "cheese.log" } },
    categories: { default: { appenders: ["cheese"], level: "error" } }
});//   配置

var logger = log4js.getLogger("cheese");
logger.level = "debug";

const url = require('url')

const urlString = 'https://www.baidu.com:443/path/index.html?id=2#tag=3'

// 反向解析

const urlObj = {
    protocol: 'https:',
    slashes: true,
    auth: null,
    host: 'www.baidu.com:443',
    port: '443',
    hostname: 'www.baidu.com',
    hash: '#tag=3',
    search: '?id=2',
    query: 'id=2',
    pathname: '/path/index.html',
    path: '/path/index.html?id=2',
    href: 'https://www.baidu.com:443/path/index.html?id=2#tag=3'
}

// logger.debug(url.parse(urlString))
// logger.debug(url.format(urlObj))
//将URL对象解析为字符串

// logger.debug(url.resolve('https://www.abc.com/a', '../'))//帮助将URL传到上层../,/b替换/a,从根开始

const urlParams = new URLSearchParams(url.parse(urlString).search)
logger.debug(urlParams)
logger.debug(urlParams.get('id'))
