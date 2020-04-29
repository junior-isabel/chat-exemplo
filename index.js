const app = require('express')()
const http = require('http')
const path = require('path')
const server = http.createServer(app)
const io = require('socket.io')(server)
const users = []
app.get('/', (req, res) => {

  res.sendFile(path.resolve(__dirname,'src','pages', 'index.html'))
})


io.on("connection", (socket) => {

  socket.broadcast.emit('user connected', 'hi')
  socket.on('message chat', (msg) => {
    io.emit('message chat', msg)
  })
})

server.listen(3000, () => {

  console.log('servidor start port:3000')
})