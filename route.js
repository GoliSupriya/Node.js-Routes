const http=require('http')
const url=require('url')

const routes={
    '/':(req,res)=>{
        res.writeHead(200,{'content-type':'text/html'})
        res.end('Welcome to Homepage')
    },

    '/about':(req,res)=>{
        res.writeHead(200,{'content-type':'text/json'})
        res.end('Welcome to about page')
    },

    '/notfound':(req,res)=>{
        res.writeHead(404,{'content-type':'text/json'})
        res.end('Page not found')
    }
}

const server=http.createServer((req,res)=>{

    const {pathname}=url.parse(req.url)
    if(routes[pathname]){
        routes[pathname](req,res)
    }
    else{
        routes['/notfound'](req,res)
    }
})

const PORT=3000
server.listen(PORT,()=>{
    console.log('Server is running on http://localhost:3000')
})