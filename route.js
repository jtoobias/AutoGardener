const Joi = require('joi');

   // Grab the http app methods and create and hanlde the request and exceptions.
const express = require('express');
const route = express();
 // Post : are writes from the user posting to the server. 
 route.get('/api/soil/:soil',(req,res) =>{

   const soil = req.params.soil;
       // Make sure (validate that there is a name field in the body)
   //const result = validateSoil(soil);
    console.log(soil);   
   // Log result
  /* console.log(result);
   if(result.error){
       // Sends full object back
       //res.status(400).send(result.error);
       // This could be too complicated so send specific sections of object through...
       // Send just error msg
       res.sendStatus(400).send(result.error.details[0].message);
       return;
   }*/
             // We need this to read the course data from the request,
       // make our own course object from this data and add it to the courses array.
 
   // push into the array
  // genres.push(genre);
   res.send(soil);  
});

/*
function validateSoil(soil){
    // Define schema
   const schema = {
    soil: Joi.number().min(0).max(120).required()
   };
   return Joi.validate(soil,schema);
 }*/

 module.exports = route;