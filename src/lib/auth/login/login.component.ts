import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ViewEncapsulation
} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { AuthService } from '../auth.service';


@Component({
  selector: 'dhs-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {

  // We are going to declare our variables here. We’ll have a loginForm that will represent our reactive form,
  // an authenticated boolean that will be true or false based on the users auth status and finally a profile
  // object that will hold the user data.
  location: Location;
  loginForm: FormGroup;
  // store: NgRedux<IAppState>;
  // user : Object;

  constructor(
    fb: FormBuilder,
    location: Location,
    public router: Router,
    private auth: AuthService
  ) {
    // For our form, we’ll just have two fields and we’ll require both of them to be filled out before the form can be submitted
    this.loginForm = fb.group({
      'email': [null, Validators.required],
      'password': [null, Validators.required],
    });

    this.location = location;
  }

  ngOnInit() {
    // We’ll check if the user is logged in once this component is loaded. We’ll do this by checking if a jwt key value
    // pair exists in local storage.
    const token = JSON.parse(localStorage.getItem('reduxPersist:token'));
    const loginUrl = '/login';
    if (token && this.location.path() === loginUrl) {
      // Todo: allow this component to receive input property "successRedirectRoute"
      return this.router.navigate(['']);
    }
  }

  submitForm(value: any) {
    if (value.email && value.password) {
      this.auth.login(value.email, value.password);
    }
  }

}
