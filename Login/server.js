
var express = require('express')
var cors = require('cors')
var bodyParser = require('body-parser')
var app = express()
const mongoose = require('mongoose')

require('./database');
require('dotenv/config');


var port = process.env.PORT || 3000

app.use(bodyParser.json())
app.use(cors())
app.use(
  bodyParser.urlencoded({
    extended: false
  })
)

//const mongoURI = 'mongodb://localhost:27017/meanloginreg'

mongoose.connect(process.env.DB_CONNECTION,{dbName :'poojan', 
 useNewUrlParser: true, useUnifiedTopology:true})
 .then(()=>console.log("DB connected successfully."))
 .catch(err=> console.log("Error 123 "+ err));


var Users = require('./routes/Users')

app.use('/users', Users)

app.listen(port, function() {
  console.log('Server is running on port: ' + port)
})
