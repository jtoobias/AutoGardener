// get the express function from the module, provide web app features
// http://expressjs.com/en/4x/api.html#app.METHOD // This is method help for express
   // Create a joi class for exception handling
//const Joi = require('joi');

   // Grab the http app methods and create and hanlde the request and exceptions.
const express = require('express');
const app = express();
const routes = require('./route');
const http = require('http');
   // This is done using the process object
   // The Environment PORT can be set in terminal, $env:PORT=... 
const port = process.env.port || 3000;
   // Use back tick ` (below esc) for value inputs in string
app.listen(port,()=> console.log(`listening on Port ${port}...`));

    // Added Json parsing -> adding middleware, app.use allows it to be used in the request processing
//app.use(express.json());
//console.log(1);
app.use(routes);
/*
const server = http.createServer((req,res) => {
   if(req.url === 'api/soil/'){
      console.log('5');
      res.end();
   }
});

server.listen(3000);

console.log('listening on port 3000...');*/
