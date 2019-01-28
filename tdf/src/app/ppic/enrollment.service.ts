import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse } from '@angular/common/http';
import { User} from './user';
import  { user} from './userModel'
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {


  _url = 'http://localhost:3000/viewAdmin';
  get_url='http://localhost:3000/'
  prof_url='http://localhost:3000/viewprof'
  constructor(private _http: HttpClient) { }

  getAdmin(user:User) {
    return this._http.post(this._url,user)
      .pipe(catchError(this.errorHandler))

  }

  errorHandler(error: HttpErrorResponse){
    return throwError(error);
  }

  getData() {
    return this._http.get<any>(this.get_url);

  }

  getProf(user:User) {
    return this._http.post(this.prof_url,user)
      .pipe(catchError(this.errorHandler))

  }
}
