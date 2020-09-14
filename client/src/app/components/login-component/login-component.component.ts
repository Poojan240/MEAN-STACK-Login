import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService, TokenPayload } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent implements OnInit {

  credentials: TokenPayload = {
    _id: '',
    first_name: '',
    last_name: '',
    email: '',
    password: ''
  }

  constructor(private auth: AuthenticationService, private router: Router) {
  
  }
  ngOnInit(): void {
  }

  login() {
    console.log("test");
    this.auth.login(this.credentials).subscribe(
   
      () => {
        this.router.navigateByUrl('/profile')
      },
      err => {
        console.error(err)
      }
    )
  }

}
