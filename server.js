const express = require('express')
const router = require('./router')

const app = express()

app.use(express.json())
app.use('/', router)

app.listen(process.env.PORT || 4001, () => {
    console.log('App listening on port 4001')
})
