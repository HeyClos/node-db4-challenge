const server = require('./server')

const port = process.env.PORT || 4449

server.listen(port, () => { 
    console.log(`port is chilling on ${port}`)
})