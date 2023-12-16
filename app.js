const express = require('express')

const app = express()
const port = process.env.PORT || 3000

app.get('/', (req,res) => {
    res.send('Hello world!')
})

app.get('/docker')

app.listen(port, () => {
    console.log(`Server started  to listening at port ${port}`)
})
