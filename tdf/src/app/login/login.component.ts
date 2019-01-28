import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {EnrollmentService} from './enrollment.service';
import {user} from './userModel';
import {ad} from './ad-model';
import {th} from './th-model';
import {st} from './st-model';
import {Router,ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private enroll:EnrollmentService,private router:Router) { }


  errorMsg= '';
admin:ad;
teacher:th;
student:st;
  type;
  id;

newUser=new user('','','');
  ngOnInit() {
    
  }


  onSubmit(){
    this.type=this.newUser.type;
    if(this.type=='admin'){
      this.enroll.enroll(this.newUser)
    .subscribe(              //come response via service from backend 
      (data:ad)=> {
                  this.admin=data;
                  this.id=this.admin.aId;
                  this.router.navigate(['admin',this.id,'ppic']);

        
      },
      error=> {
        this.errorMsg = error.statusText;
        console.log('Error!', this.errorMsg);
        alert("Wrong Credentials!");
      }
    )
    }else if(this.type=='student'){

      this.enroll.enroll(this.newUser)
    .subscribe(              //come response via service from backend 
      (data:st)=> {
                  this.student=data;
                  this.id=this.student.sId;
                  this.router.navigate(['student',this.id,'ppic']);

        
      },
      error=> {
        this.errorMsg = error.statusText;
        console.log('Error!', this.errorMsg);
        alert("Wrong Credentials!");
      }
    )
      
    }else if(this.type=='teacher'){ 
      this.enroll.enroll(this.newUser)
      .subscribe(              //come response via service from backend 
        (data:th)=> {
                    this.teacher=data;
                    this.id=this.teacher.tId;
                    this.router.navigate(['teacher',this.id,'ppic']);
  
          
        },
        error=> {
          this.errorMsg = error.statusText;
          console.log('Error!', this.errorMsg);
          alert("Wrong Credentials!");
        }
      )
    }
    
  }

}
