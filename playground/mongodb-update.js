// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=>{
    if(err){
        return console.log('Unable to connect to Mongo DB TodoApp server');
    }

    console.log('Connected to MongoDB TodoApp server');

    // db.collection('Todos')
    // .findOneAndUpdate({
    //   _id: new ObjectID('59f1c8940130bc1ab5bc362e')
    // }, {
    //   $set: {
    //       completed: true
    //   }
    // }, {
    //   returnOriginal: false
    // })
    // .then((result)=>{
    //   console.log(JSON.stringify(result, undefined, 2));
    // });

    db.collection('Users')
    .findOneAndUpdate({
      name: 'ABC'
    }, {
      $set: {
          name: 'Moneesh'
      },
      $inc: {age : 1}
    }, {
      returnOriginal: false
    })
    .then((result)=>{
      console.log(JSON.stringify(result, undefined, 2));
    });



    //db.close();
});
