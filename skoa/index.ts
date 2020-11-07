const http = require('http')
const request = require('./request.ts')
const response = require('./response.ts')
const context = require('./context.ts')

class SKOA{
    middlewares
    constructor() {
        this.middlewares = []
    }

    listen(...args){
        const server = http.createServer(async (req,res)=>{
            // create ctx
             const ctx = this.createContext(req,res)
             // this.callback(ctx)
             const fn = this.compose(this.middlewares)
             await fn(ctx)
             res.end(ctx.body)
        })

        server.listen(...args)
    }

    use(middleware){
        this.middlewares.push(middleware)
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

    compose(middlewares){
        return function (ctx){
            function dispatch(i){
                let fn = middlewares[i]
                if(!middlewares)return Promise.resolve()
                return Promise.resolve(fn(ctx,function next(){
                   return dispatch(i+1)
                }))
            }
            return dispatch(0)
        }
    }
}


module.exports = SKOA