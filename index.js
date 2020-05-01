const express = require('express')
const app = express()
const http = require('http')
const path = require('path')
const server = http.createServer(app)
const io = require('socket.io')(server)
let users = []
let messages = []
app.use(express.static(path.resolve(__dirname, 'src', 'assets')))
app.get('/', (req, res) => {

  res.sendFile(path.resolve(__dirname,'src','pages', 'index.html'))
})


io.on("connection", (socket) => {
  users.push({socketId: socket.id})
  io.emit('connect', {id: socket.id})
  io.emit('new user', users)
  socket.on('user login', (username) => {
    let user = users.find(u => u.socketId === socket.id)
    user.nickname = username
    console.log(user)
    io.emit('new user', users)
  })
  socket.on('disconnect', () => {
    users = users.filter(t => t.socketId.localeCompare(socket.id) !== 0)
    socket.broadcast.emit('new user', users)
  })
/*
  socket.broadcast.emit('user connected', 'hi')
  socket.on('message chat', (msg) => {
    io.emit('message chat', msg)
  })
  socket.on('nickname', (data) => {
    users.push(data)
    io.emit('new user', users)
  })
*/
})
io.on('disconnect', (socket) => {
  console.log('disconnect', socket.id)
})
server.listen(3000, () => {

  console.log('servidor start port:3000')
})