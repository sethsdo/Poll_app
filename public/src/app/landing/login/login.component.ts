import { Component, OnInit } from '@angular/core';
import { PublicService } from '../../public.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  errors = { message: ""};
  errmsg;
  login = {
    email: "",
    password: "",
  }
  constructor(private _landing: PublicService, private _router: Router) { }

  loginSubmit() {
    console.log(this.login)
    this._landing.login(this.login).subscribe(
      (response) => {
        console.log('Successful response from the server');
        this.displayUser()
      },
      (err) => {
        this.errors.message = err.json().msg
        this.errmsg = err.json().errmsg
        console.log(this.errors)
        this.login = {
          email : '',
          password: ''
        }
        return this.errors
      })
  }

  displayUser() {
    console.log("in display")
    this._router.navigate(["/dashboard"])

  }


  ngOnInit() {
  }


}
