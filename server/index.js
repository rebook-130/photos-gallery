const express = require('express')
const app = express()
const port = 3001
const db = require('../database/index.js')

app.get('/', (req, res) => {
  res.send('Hello Bookable!')
})

app.listen(port, () => {
  console.log(`The app listening at http://localhost:${port}`)
})