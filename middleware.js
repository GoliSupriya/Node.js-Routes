const http=require('http')
const url=require('url')

function logRequest(req,res,next){

    console.log(`${req.method} request made to ${req.url}`);
    next(req,res)

}

const server=http.createServer((req,res)=>{
    logRequest(req,res,(req,res)=>{
    
        const {pathname}=url.parse(req.url)
        if(pathname.startsWith('/user/')){
           const userId=pathname.split('/')[2]  
           res.writeHead(200,{'content-type':'text/plain'})
           res.end(`User Id:${userId}`)
        }
        else{
            res.writeHead(404,{'content-type':'text/plain'})
            res.end('Route Not Found')
        }
    })
})

const PORT=3000
server.listen(PORT,()=>{
    console.log('Server is running on http://localhost:3000')
})