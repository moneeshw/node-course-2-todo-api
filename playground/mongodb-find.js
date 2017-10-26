// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=>{
    if(err){
        return console.log('Unable to connect to Mongo DB TodoApp server');
    }

    console.log('Connected to MongoDB TodoApp server');

    // db.collection('Todos').find({
    //     _id: new ObjectID('59f1a0b5178967097897fc39')
    // }).toArray().then((docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err)=>{
    //     console.log('Unable to fecth todos.', err);
    // });

    // db.collection('Todos').find().count().then((count) => {
    //     console.log('Counts');
    //     console.log(`Todos count: ${count}`);
    // }, (err)=>{
    //     console.log('Unable to fecth todos.', err);
    // });

    db.collection('Users').find({name: 'Moneesh'}).toArray().then((doc) => {
        console.log('Users');
        console.log(JSON.stringify(doc, undefined, 2));
    }, (err)=>{
        console.log('Unable to fecth todos.', err);
    });


    //db.close();
});