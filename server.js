const http = require('http');
const fs= require('fs');

const server=http.createServer((req,res) =>{
  console.log(req.url,req.method);

  //Set Header content type
  res.setHeader('Content-type','text/html');
  
  //Send HTML files
  fs.readFile('./views/index.html',(err,data) => {
    if(err){
      console.log(err);
      res.end();
    }else{
      // res.write(data);
      res.end(data);
    }
  });

});

server.listen(3000,'localhost',() =>{
  console.log('listening for requests at port 3000')
})