
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const edit=require('./Controllers/edit-controller');
const user = require('./Controllers/register-controller')
const login =require('./Controllers/login-controller');
const view =require('./Controllers/get-controller');   // view users and retrieve name for ppic header
const delet=require('./Controllers/delete-controller')

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
app.get('/viewTeacher',view.teacher); // view teachers


app.post('/viewAdmin',view.admin);  // get user name to ppic header


app.post('/viewprof',view.prof); //view
app.put('/edit',edit.edit);//update

app.put('/editth',edit.editth);
app.put('/editst',edit.editst);
app.post('/delete',delet.edit);

app.listen(process.env.port || PORT,function(){
    console.log("Server running on localhost" + PORT);
});





