import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { BackendErrors } from '../../../shared/types/backend-errors';
import { select, Store } from '@ngrx/store';
import { isSubmittingSelector, validationErrorsSelector } from '../../store/selectors';
import { LoginRequest } from '../../../shared/types/loginRequest';
import { loginAction } from '../../store/actions/login.action';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  userProfileForm!: FormGroup;
  isSubmitting$!: Observable<boolean>;
  backendErrors$!: Observable<BackendErrors | null>;

  constructor(
    private fb: FormBuilder,
    private store: Store,
  ) {}

  ngOnInit(): void {
    this.initializeForm();
    this.initializeValues();
  }

  initializeForm(): void {
    this.userProfileForm = this.fb.group({
      username: ['', Validators.required],
      email: '',
      password: '',
    });
  }

  initializeValues(): void {
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector));
    this.backendErrors$ = this.store.pipe(select(validationErrorsSelector));
  }

  loginUserProfile(): void {
    const request: LoginRequest = {
      user: this.userProfileForm.value,
    };
    this.store.dispatch(loginAction({ request }));
  }
}
