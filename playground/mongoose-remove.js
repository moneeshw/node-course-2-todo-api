const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then(result=>{
//     console.log(result);
// });


Todo.findByIdAndRemove('59ff6e55e0d7c476daf08e3b').then(todo=>{
    console.log(todo);
});
