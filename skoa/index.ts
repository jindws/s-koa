const http = require('http')
const request = require('./request.ts')
const response = require('./response.ts')
const context = require('./context.ts')

class SKOA{
    callback;
    listen(...args){
        const server = http.createServer((req,res)=>{
            // create ctx
             const ctx = this.createContext(req,res)
             this.callback(ctx)

             res.end(ctx.body)
        })

        server.listen(...args)
    }

    use(callback){
        this.callback = callback;
    }

    //构建上下文
    createContext(req,res){
        const ctx = Object.create(context)
        ctx.request = Object.create(request)
        ctx.response = Object.create(response)

        ctx.req = ctx.request.req = req;
        ctx.res = ctx.response.res = res;
        return ctx;
    }
}


module.exports = SKOA