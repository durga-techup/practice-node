const swaggerAutogen = require('swagger-autogen')()

const outputFile = './swagger_output.json'
const endpointsFiles = ['./routes/user/user.js']

swaggerAutogen(outputFile, endpointsFiles)