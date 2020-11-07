// const Koa = require('koa')
const Koa = require('../skoa/index.ts')
const app = new Koa()

// app.use((ctx,next)=>{
//     console.log(1)
//     next()
//     console.log(2)
// })
//
// app.use((ctx,next)=>{
//     console.log(11)
//     next()
// })

app.use((ctx)=>{
    ctx.status = 201;
    ctx.body = 'hello skoa'
})

app.listen(3000,()=>{
    console.log('listen 3000')
})