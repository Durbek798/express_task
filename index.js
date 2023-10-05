const express = require('express')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

const blogRoute = require('./routes/blog.js')

app.use(blogRoute)

app.listen(3000, () => {
  console.log('Server running on port: 3000')
})
