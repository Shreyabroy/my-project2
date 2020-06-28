import { Component, OnInit } from '@angular/core';
import { UserService } from './../../services/user.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  public: IUser;
  submitted = false;

  constructor(private userService: UserService) {
    this.public = {
      firstname: '',
      lastname: '',
      age: 0,
      gender: '',
      username: '',
      email: '',
      password: '',
      address: '',
      pincode: 0,
      contactnumber: 0,
      usertype: '',
      authmethod: '',
    };
   }

  ngOnInit() {
  }

  saveUser() {
    const data = { ...this.public };
    data.usertype = 'normal';
    data.authmethod = 'normal';

    this.userService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newUser() {
    this.submitted = false;
    this.public = {
      firstname: '',
      lastname: '',
      age: 0,
      gender: '',
      username: '',
      email: '',
      password: '',
      address: '',
      pincode: 0,
      contactnumber: 0,
      usertype: '',
      authmethod: '',
    };
  }

}

interface IUser {
  firstname: string;
  lastname: string;
  age: number;
  gender: string;
  username: string;
  email: string;
  password: string;
  address: string;
  pincode: number;
  contactnumber: number;
  usertype: string;
  authmethod: string;
}
