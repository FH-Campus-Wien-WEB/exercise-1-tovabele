const express = require('express')
const path = require('path')
const app = express()

// Serve static content in directory 'files'
app.use(express.static(path.join(__dirname, 'files')));

// Configure a 'get' endpoint for data..
app.get('/movies', function (req, res) {
  /*/ Part 1:
  Implement the server-side endpoint in server/server.js so that 
  /movies returns an array of at least three movie objects in valid JSON, 
  based on OMDb API example data (trimmed and reformatted as specified).
  */
  res.send('!dlrow olleH')
})

app.listen(3000)

console.log("Server now listening on http://localhost:3000/")

