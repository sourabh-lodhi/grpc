const client = require("./client");

client.demo({ name: "sourabh", age: 22 }, (error, data) => {
  if (error) {
    console.log("error", error);
  }
  console.log(data);
});
client.test({ name: "vineet", age: 21 }, (error, data) => {
  if (error) {
    console.log("error", error);
  }
  console.log(data);
});
