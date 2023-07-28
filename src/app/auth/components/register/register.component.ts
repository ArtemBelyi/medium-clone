import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { registerAction } from '../../store/actions/register.action';

@Component({
  selector: 'mc-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  userProfileForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private store: Store,
  ) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void {
    this.userProfileForm = this.fb.group({
      username: ['', Validators.required],
      email: '',
      password: '',
    });
  }

  updateUserProfile(): void {
    this.store.dispatch(registerAction(this.userProfileForm.value));
  }
}
