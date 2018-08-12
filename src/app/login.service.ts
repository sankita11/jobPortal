import { Injectable } from '@angular/core';

import { User } from './user' ;
import { USERS } from './mock-users';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  testFunc(): void {
    console.log('here');
  }

  getUserByName( username: string ): User {
    let user = new User();
    USERS.forEach(function( eachElem ) {
      if ( eachElem.name === username) {
        user = eachElem;
      }
    });
    return user;
  }

}
