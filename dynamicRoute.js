const http=require('http')
const url=require('url')


const server=http.createServer((req,res)=>{

    const {pathname}=url.parse(req.url)
    if(pathname.startsWith('/user/')){
        const userId=pathname.split('/')[2]
        res.writeHead(200,{'content-type':'text/plain'})
        res.end(`UserId: ${userId}`)
    }
    else{
        res.writeHead(404,{'content-type':'text/plain'})
        res.end('Route Not Found')
    }
})

const PORT=3000
server.listen(PORT,()=>{
    console.log('Server is running on http://localhost:3000')
})