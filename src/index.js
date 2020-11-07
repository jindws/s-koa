// const Koa = require('koa')
const Koa = require('../skoa/index.ts')
const app = new Koa()

const delay = ()=>new Promise(resolve=>setTimeout(()=>resolve(),2000))

app.use(async(ctx,next)=>{
    ctx.body = '1'
    console.log(1)
    await next()
    ctx.body += 5
    console.log(5)
})

app.use(async(ctx,next)=>{
    ctx.body += 2;
    console.log(2)
    await delay(3000)//无效
    await next()
    ctx.body += 4
    console.log(4)
})

app.use(async(ctx)=>{
    ctx.status = 201;
    ctx.body += 3
    console.log(3)
})

app.listen(3000,()=>{
    console.log('listen 3000')
})