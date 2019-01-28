import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { NgForm } from '@angular/forms/src/directives/ng_form';

import {ad} from './ad-model';
import {th} from './th-model';
import {st} from './st-model';
import {user} from './view-model'
import {delet} from './delete'
// import { admin } from './view-model';




@Injectable({
  providedIn: 'root'
})
export class EditService {


  _url = 'http://192.168.8.110:3000/edit';
  st_url='http://192.168.8.110:3000/editst'
  th_url = 'http://192.168.8.110:3000/editth';
  delet='http://192.168.8.110:3000/delete';
  constructor(private _http: HttpClient) { }



  // enroll(user: admin) {
  //   return this._http.post<any>(this._url,user)
  //     .pipe(catchError(this.errorHandler))

  // }

  errorHandler(error: HttpErrorResponse){
    return throwError(error);
  }

  edit(data:user) {
    return this._http.put<any>(this._url,data); 

  }
  editst(data:user) {
    return this._http.put<any>(this._url,data); 

  }
  editth(data:user) {
    return this._http.put<any>(this._url,data); 

  }
  deleteu(data:delet) {
    return this._http.post<any>(this.delet,data); 

  }

}
