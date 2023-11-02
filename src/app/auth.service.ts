
import { HttpClient ,HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot,Router, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate {
  constructor(private r:Router,
    private http:HttpClient){}
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot ): boolean {
    let loggedin= false;
    if(loggedin){
         return true;
    }else
    {
      this.r.navigate(['/login']);
      return false }
}

   notify(){
    const headers =new HttpHeaders({
      'content-type':'application/json',
      'authenticationToken':'1234565'

    });
 return this.http.get('https://jsonplaceholder.typicode.com/users',{headers:headers});
   }

   //constructor(private httpClient: HttpClient){}
  getimg(){
   return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }
}