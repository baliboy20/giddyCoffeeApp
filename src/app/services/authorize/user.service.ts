import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
  public isValid = true;
  constructor() { }
  login(email: string, password: string) {
    if (email === 'email' && password === 'pw') {
      return true;
  } else {
      return false;
  }
  }

}
