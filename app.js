const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
  console.log('Test')
})

// app.get('/save', function (req, res) {
//    res.json({name:'Hello World'})
//   })
app.listen(3000)
console.log('Server is running on localhost:3000')