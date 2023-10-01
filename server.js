const http = require('http');

const server=http.createServer((req,res) =>{
  console.log(req.url,req.method);

  //Set Header content type
  res.setHeader('Content-type','text/html');
  res.write('<p>hello broo</p>');
  res.write('<h1>hello broo</h1>');
  res.end();
});

server.listen(3000,'localhost',() =>{
  console.log('listening for requests at port 3000')
})