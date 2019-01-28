import { Component, OnInit } from '@angular/core';
import {admin} from './view-model'
import {User} from './user'
import {Router, ActivatedRoute} from '@angular/router'
import {EnrollmentService} from './enrollment.service';
import {NgForm} from '@angular/forms'
import {EditService} from '../services/edit.service'
import { TeditComponent } from 'src/app/tedit/tedit.component';
import {user} from '../services/view-model'
import {Location} from '@angular/common'

@Component({
  selector: 'app-editproft',
  templateUrl: './editproft.component.html',
  styleUrls: ['./editproft.component.css']
})
export class EditproftComponent implements OnInit {

  constructor(private enroll:EnrollmentService,private router:Router,private route:ActivatedRoute,private edit:EditService,private _location: Location) { }
  id;
  newUser:User
  admin:admin;
  user:admin;
  type;
  ngOnInit() {
    this.id=this.route.snapshot.paramMap.get('vid');

    this.newUser= new User(this.id,'teacher');//type eka anuwa admin kyna eka wenas krnna
    this.enroll.getAdmin(this.newUser).subscribe((data:admin)=>{
      this.admin=data;
      console.log(this.admin.pw);
    });
  }

  onSubmit(data:NgForm){
    this.user= new user(this.id,data.value.FirstName,data.value.MidName,data.value.LastName,data.value.EmailId,this.admin.pw,this.admin.rpw, data.value.No,data.value.Street,data.value.City,data.value.ContactNo);
    console.log(data.value.FirstName);

    this.edit.editth(this.user).//edit.edit kiyna thnq
    subscribe(res=>{
      this.router.navigate(['tedit']);
    });
  }


}
