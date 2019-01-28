import { Component, OnInit } from '@angular/core';
import {EnrollmentService} from './enrollment.service';
import {admin} from './view-model'
import {delet} from '../services/delete'
import {EditService} from '../services/edit.service'
import {ActivatedRoute} from '@angular/router'
@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  constructor(private enroll:EnrollmentService,private delet:EditService,private route:ActivatedRoute) { }
  errorMsg= '';
  view:admin[];
  type;
user:delet;
  ngOnInit() {
   // this.type=this.route.snapshot.paramMap.get('type');
    this.type='admin'
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

  onsubmit(id:String){
    console.log(id)
this.user= new delet(id,this.type);  
    this.delet.deleteu(this.user).
    subscribe(res=>{
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
    });
  }
  }


