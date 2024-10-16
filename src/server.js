const express=require("express")
const cors = require("cors")
var bodyParser = require('body-parser')
const app = express()

require("dotenv").config()
const { dbConnection } = require("./dbconfig/db")

dbConnection()

app.use(bodyParser.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(cors())
app.use(express.static("public"));

const usersRouter = require('./routes/user/user');
// app.use('/api', speedLimiter, user)
// app.get("/test-file", (req, res) => {
//     res.sendFile(__dirname + "/public/test.html")
// })


//Swagger setup
const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('./swagger_output.json')
app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile))

app.use('/users', usersRouter);


const PORT=process.env.PORT
app.listen(PORT, () => {
    console.log(`Server is running on PORT, ${PORT}`)
})