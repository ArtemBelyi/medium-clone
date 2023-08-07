import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './components/register/register.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { AuthService } from './services/auth.service';
import { reducers } from './store/reducers/reducers';
import { EffectsModule } from '@ngrx/effects';
import { LoginEffect } from './store/effects/login.effect';
import { RegisterEffect } from './store/effects/register.effect';
import { GetCurrentUserEffect } from './store/effects/getCurrentUser.effect';
import { LocalStorageInfoService } from '../shared/services/local-storage-info.service';
import { BackendErrorMessagesModule } from '../shared/modules/backend-error-messages/backend-error-messages.module';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [RegisterComponent, LoginComponent],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    BackendErrorMessagesModule,
    StoreModule.forFeature('auth', reducers),
    EffectsModule.forFeature([RegisterEffect, LoginEffect, GetCurrentUserEffect]),
  ],
  providers: [AuthService, LocalStorageInfoService],
})
export class AuthModule {}
