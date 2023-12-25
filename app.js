const express = require('express')
const mongoose = require('mongoose')

const app = express()
const port = process.env.PORT || 3000

mongoose.connect('mongodb://ndungu:ndungu11@mongo:27017/?authMechanism=DEFAULT')
  .then(() => console.log('Connected to the DB successfully'))
  .catch((error) => console.log(error))

app.get('/', (req,res) => {
    res.send('Hello world! my name is Nganga Ndungu')
})

app.get('/docker',(req,res) => {
  res.send('Hello Docker')  
})

app.listen(port, () => {
    console.log(`Server started  to listening at port ${port}`)
})
