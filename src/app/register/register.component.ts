import {Component, OnDestroy, OnInit} from '@angular/core';
import {MatSnackBar} from "@angular/material";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit, OnDestroy {

  register = {
    fname: '',
    lname: '',
    email: '',
    telephone: '',
    companyName: '',
  }

  constructor(private snackbar: MatSnackBar, private router: Router) {
  }

  ngOnInit() {
  }

  onClicked(value) {
    if (value === 'ok') {
      this.snackbar.open('Registration OK', 'Registration', { duration: 700});

    } else {
      this.snackbar.open('Registration CANCELLED', 'Registration', {duration: 700});
    }
    setTimeout(a => {
      this.router.navigate(['menu']);
    }, 900);
  }

  ngOnDestroy() {
    this.router = null;
    this.snackbar = null;
  }


}
