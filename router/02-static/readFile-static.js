const mime = require('mime')
const path = require('path')
const fs = require('fs')



function myReadFile(file) {
    return new Promise((resolve, reject) => {
        fs.readFile(file, (err, data) => {
            if (err) {
                resolve('')
            } else {
                resolve(data)
            }
        })
    })
}


async function readFileStatic(pathFileName) {
    let ext = path.parse(pathFileName).ext
    let mimeType = mime.getType(ext)
    let data
    if (fs.existsSync(pathFileName)) {
        if (ext) {
            data = await myReadFile(pathFileName)
        } else {
            data = await myReadFile(path.join(pathFileName, './ index.html'))
        }

    } else {
        data = 'file or forder no find'
    }
    return {
        data,
        mimeType
    }
}
module.exports = readFileStatic