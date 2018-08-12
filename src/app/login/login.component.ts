import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../user';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = new User();
  userRole = 'RECRUITER' ;
  constructor( private loginService: LoginService, private router: Router ) { }

  ngOnInit() {
  }

  onSubmit(): void {

    this.loginService.testFunc();

    const userDetails = this.loginService.getUserByName(this.user.name);

    this.userRole = userDetails.role;

    if ( this.userRole === undefined){
      this.userRole = 'RECRUITER';
    }

    this.router.navigate(['list/' + this.userRole]);

  }

}
