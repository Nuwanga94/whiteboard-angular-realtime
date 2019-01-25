
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const user = require('./Controllers/register-controller')
const login =require('./Controllers/login-controller');
const view =require('./Controllers/get-controller');   // view users and retrieve name for ppic header


//const signup = require( './controllers/register-controller.js')


const PORT = 3000;
const app = express();

app.use(bodyParser.json());
app.use(cors());






app.get('/', function(req,res){
    res.send('Hello from server');
})



app.post('/enroll', user.signup);
app.post('/login', login.login);//call for login page

app.get('/view',view.profile); // view admins
app.get('/viewStudent',view.student); // view students
app.get('/viewTeacher',view.teacher); // view students


app.post('/viewAdmin',view.admin);  // get user name to ppic header






app.listen(process.env.port || PORT,function(){
    console.log("Server running on localhost" + PORT);
});





