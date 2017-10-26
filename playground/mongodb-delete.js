// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=>{
    if(err){
        return console.log('Unable to connect to Mongo DB TodoApp server');
    }

    console.log('Connected to MongoDB TodoApp server');

    // db.collection('Todos')
    //   .deleteMany({text: 'Eat lunch'}).then((res) => {
    //     console.log('Deleted');
    //     console.log(res)
    //     console.log(JSON.stringify(res, undefined, 2));
    // }, (err)=>{
    //     console.log('Unable to delete todos.', err);
    // });

    // db.collection('Users')
    //   .findOneAndDelete({_id: new ObjectID('59f1ab8768e2401bac684e09')})
    //   .then((res) => {
    //     console.log(res)
    //   });

      // db.collection('Users')
      //   .deleteMany({name: 'Moneesh'})
      //   .then((res) => {
      //     console.log(res)
      //   });
    //db.close();
});
