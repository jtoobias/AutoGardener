const Joi = require('joi');

   // Grab the http app methods and create and hanlde the request and exceptions.
const express = require('express');
const route = express();
let amount_of_packets = 0;

const soil_sensors = [
    {id: 1, value: 0},
    {id: 2, value: 0},
    {id: 3, value: 0},
];

route.all('/',(req,res, next) =>{
   amount_of_packets++;
   console.log('all');
   next();
});

 // get : Get info from the server. 
 route.get('/api/soil_sensors',(req,res) =>{
    const id = req.query.id
    const moisture = req.query.moisture;
   //const len = Buffer.from(soil);
       // Make sure (validate that there is a name field in the body)
   //const result = validateSoil(soil);
    console.log(`Moisture: ${moisture} - ID: ${id}`);   
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
   res.send(`+IPD,${amount_of_packets}:${moisture}`);  
});

// Post : are writes from the user posting to the server. 
route.post('/api/soil/',(req,res) =>{

    const soil = req.params;
    


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
    
   res.send(`+IPD,${amount_of_packets}:${soil}`);  
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