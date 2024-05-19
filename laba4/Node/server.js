const express = require('express')
const path = require('path')
const fs = require('fs')
const app = express()
const port = 3000

const filePath = process.env.FILE_PATH || 'connection_logs_folder'
const fileName = process.env.FILE_NAME || 'connection_logs'
const fileFormat = process.env.FILE_FORMAT || 'txt'

const ensureFileExists = absolutePath => {
  const directory = path.dirname(absolutePath)
  console.log('directory: ', directory)

  if (!fs.existsSync(directory)) {
    fs.mkdirSync(directory, { recursive: true })
  }

  if (!fs.existsSync(absolutePath)) {
    fs.writeFileSync(absolutePath, '')
  }
}

const logConnection = connectionInfo => {
  const logMessage = `${new Date().toUTCString()} - ${connectionInfo.remoteAddress}\n`

  const relativePath = `${filePath}/${fileName}.${fileFormat}`

  const absolutePath = path.resolve(relativePath)
  console.log('assolutePath: ', absolutePath)
  ensureFileExists(absolutePath)

  fs.appendFile(relativePath, logMessage, err => {
    if (err) throw err
    console.log('Connection logged!')
  })
}

app.use((req, res, next) => {
  const connectionInfo = {
    // remoteAddress: req.socket.remoteAddress
    remoteAddress: req.ip
  }
  logConnection(connectionInfo)
  next()
})

app.get('/', (req, res) => res.send('Hello World!!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
