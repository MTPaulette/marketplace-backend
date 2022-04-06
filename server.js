const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello Worl pauletted!')
})

app.listen(port, () => {
  console.log(`Examplexndsh app listening on port ${port}`)
})

