import { Component, OnInit } from '@angular/core';
import { AuthenticationService, UserDetails } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-profile-component',
  templateUrl: './profile-component.component.html',
  styleUrls: ['./profile-component.component.css']
})
export class ProfileComponentComponent implements OnInit {
  details: UserDetails

  constructor(private auth : AuthenticationService) { }

  
  ngOnInit() {
    this.auth.profile().subscribe(
      user => {
        this.details = user
      },
      err => {
        console.error(err)
      }
    )
  }

}
