import { Component, OnInit } from '@angular/core';
import {EnrollmentService} from './enrollment.service';
import {admin} from './view-model'
import {Router, ActivatedRoute} from '@angular/router'
import{User} from './user'

@Component({
  selector: 'app-tedit',
  templateUrl: './tedit.component.html',
  styleUrls: ['./tedit.component.css']
})
export class TeditComponent implements OnInit {

  constructor(private enroll:EnrollmentService,private router:Router,private route:ActivatedRoute) { }
  errorMsg= '';
  view:admin[];
  id;
  newUser:User
  admin:admin;
  type;

  ngOnInit() {
    this.id=this.route.snapshot.paramMap.get('id');
    this.type=this.route.snapshot.paramMap.get('type');
   // this.id=this.route.snapshot.paramMap.get('id');

    this.enroll.getData()
    .subscribe(
      (resp:admin[]) => {
                  console.log('Success!', resp);
                  this.view=resp;
                  console.log(this.view[0].email);
                  //window.location.href = "student"; 
        
      },

      
      error=> {
        this.errorMsg = error.statusText;
        console.log('Error!', this.errorMsg);
      }
    )
  }

onsubmit(id:string){
  this.router.navigate(['tedit','editproft',id])
 
}

  }



