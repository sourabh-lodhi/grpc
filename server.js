const grpc = require("@grpc/grpc-js");
const protoLoader = require("@grpc/proto-loader");

const packageDefinition = protoLoader.loadSync("./proto/index.proto", {});

const Service =
  grpc.loadPackageDefinition(packageDefinition).TestingService.service;

const server = new grpc.Server();

server.addService(Service, {
  demo: (call, callback) => {
    console.log(call.request);
    callback(null, { id: 1, ...call.request });
  },
  test: (call, callback) =>{
    console.log(call.request)
    callback(null, { id:2, ...call.request})
  }
});
server.bindAsync(
  "localhost:8000",
  grpc.ServerCredentials.createInsecure(),
  (error, port) => {
    server.start()
    if (error) {
      console.log("error:", error);
    } else {
      console.log("server is running:", port);
    }
  }
);
