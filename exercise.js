function printName(callback) {
  const helloName = "Hello John";
  setTimeout(function () {
    callback(helloName);
  }, 1000);
}

function callbackFunction(name) {
  console.log(name);
}

printName(callbackFunction);
