/**
 * Created by Navit
 */

 'use strict';
 var Mongoose = require('mongoose');

const uri = "mongodb+srv://navit:navc011337@cloudbootcamp.bv4zn.mongodb.net/mvcStructure?retryWrites=true&w=majority";

const mongooseOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true
};
Mongoose.set('useCreateIndex', true);
Mongoose.set('useFindAndModify', false);


 //Connect to MongoDB
 Mongoose.connect(uri, mongooseOptions, function (err) {
     if (err) {
         console.log("DB Error: ", err);
         process.exit(1);
     } else {
         console.log('MongoDB Connected');
     }
 });
 
 exports.Mongoose = Mongoose;

 




