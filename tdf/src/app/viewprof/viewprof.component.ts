import { Component, OnInit } from '@angular/core';
import {admin} from './view-model'
import {User} from './user'
import {Router, ActivatedRoute} from '@angular/router'
import {EnrollmentService} from './enrollment.service';

@Component({
  selector: 'app-viewprof',
  templateUrl: './viewprof.component.html',
  styleUrls: ['./viewprof.component.css']
})
export class ViewprofComponent implements OnInit {

  constructor(private enroll:EnrollmentService,private router:Router,private route:ActivatedRoute) { }
  id;
  newUser:User
  admin:admin;
  type;
  ngOnInit() {
    this.id=this.route.snapshot.paramMap.get('vid');
   
    this.newUser= new User(this.id,'admin');//type eka anuwa admin kyna eka wenas krnna
    this.enroll.getAdmin(this.newUser).subscribe((data:admin)=>{
      this.admin=data;
      console.log(this.admin);
    });
  }

}
