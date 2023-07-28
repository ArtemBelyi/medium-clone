import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './components/register/register.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { reducers } from './store/reducers/reducers';

@NgModule({
  declarations: [RegisterComponent],
  imports: [CommonModule, RouterModule, ReactiveFormsModule, StoreModule.forFeature('auth', reducers)],
})
export class AuthModule {}
