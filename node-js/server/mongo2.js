const assert = require('assert');

exports.insertDocument = (db, document, collection, callback) => {
    const coll = db.collection(collection);
    return coll.insert(document)/*(err, result) => {
        assert.equal(err, null);
    
        console.log("Inserted " + result.result.n +
            " documents into the collection " + collection);
        callback(result);
    });*/
};

exports.findDocument = (db,collection,callback)=>{
    const coll = db.collection('collection');
    return coll.find({}).toArray()/*(err,res)=>{
        assert.strictEqual(err,null);
        callback(res);
    })*/
}