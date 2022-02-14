const handler = require('serve-handler');
const http = require('http');
const arg = process.argv.slice(2)
const path = arg[0] || "/"
const port = arg[1] || 80


console.log("sharing path: " + path) 
console.log("on port: " + port)

const server = http.createServer((request, response) => {
  
  return handler(request, response, {
    "public": path 
  });
})

server.listen(port, '0.0.0.0', () => {
  console.log('Running at http://localhost:' + String(port));
});