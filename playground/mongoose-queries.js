const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '59f6fdccfc646421e08d4047_';

// if(!ObjectID.isValid(id)){
//     console.log('Id not valid');
// }

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos', todos);
// });

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//     if(!todo){
//         return console.log('Id not found');
//     }
//     console.log('Todo by Id', todo);
// }).catch((e) => console.log(e));


var userId = '59f2de04f56c5e1cd45cb32a';
var notFoundUserId = '69f2de04f56c5e1cd45cb32a';

User.findById(userId)
.then(user=>{
    if(!user){
        return console.log('Unable to find user');
    }
    console.log(JSON.stringify(user, undefined, 2));
}, e=>{ console.log(e)});
//.catch(e=>{ console.log(e)});

User.findById(notFoundUserId)
.then(user=>{
    if(!user){
        return console.log('Unable to find user');
    }
    console.log('Not found User', user);
}, e=>{ console.log(e)});
//.catch(e=>{ console.log(e)});
