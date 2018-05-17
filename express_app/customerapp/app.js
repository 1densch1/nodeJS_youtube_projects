var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');


var app = express();

// var logger = function(req,res,next) {
//   console.log('Logging...');
//   next();  
// }

// app.use(logger);

// View Engine
app.set('view engine','ejs');
app.set('views', path.join(__dirname, 'views'));

// Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Set Static Path
app.use(express.static(path.join(__dirname, 'public')));

// var people = [
//   {
//     name: 'Jeff',
//     age: 30
//   },
//   {
//     name: 'Sara',
//     age: 22
//   },
//   {
//     name: 'Bill',
//     age: 40
//   }
// ]

var users = [
  {
    id: 1,
    first_name: 'John',
    last_name: 'Doe',
    email: 'johndoegmail.com'
  },
  {
    id: 2,
    first_name: 'Bob',
    last_name: 'Smith',
    email: 'bobsmithgmail.com'
  },
  {
    id: 3,
    first_name: 'Jill',
    last_name: 'Jackson',
    email: 'jjacksongmail.com'
  },
]

app.get('/', function(req,res) {
  var title = 'Customers';
  res.render('index', {
    title: title,
    users: users
  });  
});

// app.post('/users/add',function(req,res) {
//   console.log(req.body.first_name);
// });

app.listen(3000, ()=>{
  console.log("Server started on Port 3000...");
})