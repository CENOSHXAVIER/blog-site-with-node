const http = require('http');

const server=http.createServer((req,res) =>{
  console.log('A request is made.');
});

server.listen(3000,'localhost',() =>{
  console.log('listening for requests at port 3000')
})