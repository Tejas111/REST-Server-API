const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const dboper = require('./mongo2');
const url = 'mongodb://localhost:27017/tejas';
const dbname = 'tejas';

MongoClient.connect(url).then((db) => {

    //assert.equal(err,null);
    var db1=db.db('tejas');
    console.log('Connected correctly to server');
     dboper.insertDocument(db1,{name:"Tejask",description:"good"},'dishes')
    .then((result)=>{
        console.log("Insert Document"+result.ops);
        return dboper.findDocument(db1,'tejas','dishes');
    })
    .then((docs)=>{
        console.log("The found documents are "+ docs.result);
        return db.close();
    })
    .catch((err)=>console.log(err));
        //db.close();


    

}).catch((err)=>console.log(err));