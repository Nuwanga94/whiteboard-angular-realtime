
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const edit=require('./Controllers/edit-controller');
const user = require('./Controllers/register-controller')
const login =require('./Controllers/login-controller');
const view =require('./Controllers/get-controller');   // view users and retrieve name for ppic header
const delet=require('./Controllers/delete-controller');
let upload = require('./config/multer.config.js');
const fileWorker = require('./controllers/file.controller.js')

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

app.post('/api/file/upload', upload.single("file"), fileWorker.uploadFile);
 
    app.get('/api/file/all', fileWorker.listAllFiles);
     
    app.get('/api/file/:id', fileWorker.downloadFile);


app.listen(process.env.port || PORT,function(){
    console.log("Server running on localhost" + PORT);
});
const corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200
  }
  app.use(cors(corsOptions));
   
  global.__basedir = __dirname;
   
  const db = require('./config/db.config.js');
    
  // force: true will drop the table if it already exists
  db.sequelize.sync({force: true}).then(() => {
    console.log('Drop and Resync with { force: true }');
  }); 
   
  //let router = require('./app/routers/file.router.js');
  //app.use('/', router);
   
  // Create a Server
  const server = app.listen(8080, function () {
   
    let host = server.address().address
    let port = server.address().port
   
    console.log("App listening at http://%s:%s", host, port); 
  })





