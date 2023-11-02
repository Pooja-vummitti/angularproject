import { Component,OnInit,Input} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
//two way binding
export class LoginComponent implements OnInit {
  username: string = 'pooja';
  password: string = '1234';
  @Input('username') user:any;
  @Input('password') pass:any;
  constructor(private router: Router) {}

  ngOnInit(): void {
      
  }
  onLoginButtonClick() {
    if (this.username === this.user&&this.password === this.pass) {
      //console.log('entered');
      this.router.navigate(['/menu/course']);
    
    } else {
      alert("Sorry, wrong password");
          this.router.navigate(['./login']);
     
    }
  }



 



 
}

