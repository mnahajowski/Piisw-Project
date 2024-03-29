import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  form:FormGroup;

  constructor(private fb:FormBuilder,
              private authService: AuthService,
              private router: Router) {

    this.form = this.fb.group({
      username: ['',Validators.required],
      password: ['',Validators.required]
    });
  }

  login() {
    const val = this.form.value;

    if (val.username && val.password) {
      this.authService.login(val.username, val.password)
        .subscribe({
          complete: () => {
            console.log("User is logged in");
            this.router.navigateByUrl('/');
          },
          error: () => {
            alert("Nieprawidłowa nazwa użytkownika lub hasło.");
          }
        });
    }
  }

  register($event: MouseEvent) {
    window.location.href = '/register';
  }

}
