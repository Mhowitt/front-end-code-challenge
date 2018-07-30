const express = require('express'),
      bodyParser = require('body-parser'),
      partners = require('./routes/partners')
const cors = require('cors')

const app = express()
app.use(cors())

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use('/api/partners', partners)
app.listen(3001)
