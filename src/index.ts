// const Koa = require('koa')
import Koa from "../skoa"
// const Router = require('koa-router')
import Router from "../skoa/router"
import Static from "../skoa/static"
const app = new Koa();
const router = new Router();

router.get("/test", async (ctx) => {
  ctx.body = "get test";
});
router.post("/test", async (ctx) => (ctx.body = "post test"));

// const delay = ()=>new Promise(resolve=>setTimeout(()=>resolve(),2000))

// app.use(async(ctx,next)=>{
//     ctx.body = '1'
//     console.log(1)
//     await next()
//     ctx.body += 5
//     console.log(5)
// })
//
// app.use(async(ctx,next)=>{
//     ctx.body += 2;
//     console.log(2)
//     await delay(3000)//无效
//     await next()
//     ctx.body += 4
//     console.log(4)
// })
//
// app.use(async(ctx)=>{
//     ctx.status = 201;
//     ctx.body += 3
//     console.log(3)
// })
app.use(router.routes());
app.use(Static("./public"));
app.listen(3000, () => {
  console.log("listen 3000");
});
