const grpc = require("@grpc/grpc-js")
const protoLoader = require('@grpc/proto-loader')

const packageDefinition = protoLoader.loadSync("./proto/index.proto",{})

const service = grpc.loadPackageDefinition(packageDefinition).TestingService

const client = new service ("localhost:8000",grpc.credentials.createInsecure())

module.exports = client
