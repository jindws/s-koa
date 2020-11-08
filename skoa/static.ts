const fs = require('fs')
const path = require('path')

module.exports = function(dirPath='./public'){
    return async (ctx,next) =>{
        if(ctx.url.startsWith(dirPath.substr(1))){
            const filePath = path.basename(ctx.url)
            const _path = path.resolve(dirPath,filePath)
            if(fs.existsSync(_path)){
                 ctx.body = fs.readFileSync(_path)
            }else{
                ctx.status = 404
                ctx.body = 'no file'
            }
        }
        next()
    }
}