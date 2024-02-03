// auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'http://localhost:8092/admin/api';

  constructor(private http: HttpClient) { }
  signUp(name:string,password:string){
        return this.http.post('http://localhost:8092/admin/api/adduserprofile',{displayName:name,password:password});

  }

  // signUp(user: any): Observable<any> {
  //   return this.http.post(`${this.baseUrl}/adduserprofile`, user);
  // }

  // login(credentials: any): Observable<any> {
  //   return this.http.post(`${this.baseUrl}/adminlogin`, credentials);
  // }
}
