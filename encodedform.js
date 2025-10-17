const http=require('http')
const url=require('url')
const queryString=require('querystring')

const server=http.createServer((req,res)=>{

    let data=''
    req.on('data',(chunk)=>{
        data+=chunk
    })

    req.on('end',()=>{
        const parsedData=queryString.parse(data)
        res.writeHead(200,{'content-type':'application/json'})
            res.end(JSON.stringify({message:'Form data recieved',parsedData}))
    })

})

const PORT=3000
server.listen(PORT,()=>{
    console.log('Server is running on http://localhost:3000')
})