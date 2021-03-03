const express = require('express')
const http = require('http')
const ejs = require('ejs')
const socketio = require('socket.io')

const print = console.log
const port = process.env.PORT || 3000

const app = express()
const server = http.createServer(app)
const io = socketio(server)

app.engine('html', ejs.renderFile)
app.set('view engine', 'html')

// SOCKET
io.on('connection', async function (client) {
  print('new user', client.id)
})

// SERVER

app.get('/', (req, res) => {
  res.render('index.html')
})

server.listen(port, () => print(`http://localhost:${port}`))