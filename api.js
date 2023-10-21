const http = require('http')

const server = http.createServer((req, res)=>{
    // url stuff
    let url = req.url
    let data = null
    if(url === '/mahasiswa'){
        data = 'Data mahasiswa'
    } else if(url === '/dosen'){
        data = 'Data dosen'
    }else{
        data = 'Data tamu'
    }

    // server
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/json')
    res.write(JSON.stringify({
        'status': 'success',
        'messsage': 'response success',
        'data': data
    }))
    res.end()
})

const port = 3001
const host = 'localhost'
server.listen(port, host, () =>{
    console.log(`server berjalan pada http://${host}:${port}`);
})