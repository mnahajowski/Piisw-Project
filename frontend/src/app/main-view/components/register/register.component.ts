import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";
import { HttpClient } from '@angular/common/http';
import { RegistrationResult } from '../../models/registration-result';
import { LocalizationService } from 'src/app/services/localization.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  form:FormGroup;

  constructor(private fb:FormBuilder,
              private authService: AuthService,
              private router: Router,
              private http: HttpClient,
              private localization: LocalizationService) {

    this.form = this.fb.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  register() {
    const data = this.form.value;
    this.http.post<RegistrationResult>("/api/register", data).subscribe(res => {
      if (res != "SUCCESS") {
        alert(this.localization.getLocalizedRegistrationResult(res));
        return;
      }

      this.authService.login(data.username, data.password).subscribe(_ => {
        this.router.navigateByUrl("/");
      });
    });
  }

}
