const http = require('http')

const server = http.createServer((req, res)=>{
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/html')
    res.write('Hai, selamat datang di nodeJS')
    res.end()
})

const port = 3000
const host = 'localhost'
server.listen(port, host, () =>{
    console.log(`server berjalan pada http://${host}:${port}`);
})