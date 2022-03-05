const express = require('express')
const app = express()
const port =  5001
const dbConnection = require('./db')




app.use('/api/cars/' , require('./routes/carsRoute'))
app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Node JS Server Started in Port ${port}`))