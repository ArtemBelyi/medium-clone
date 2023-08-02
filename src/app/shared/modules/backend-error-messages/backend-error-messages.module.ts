import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackendErrorMessagesComponent } from './components/backend-error-messages/backend-error-messages.component';

const exports = [BackendErrorMessagesComponent];

@NgModule({
  declarations: [BackendErrorMessagesComponent],
  imports: [CommonModule],
  exports: [...exports],
})
export class BackendErrorMessagesModule {}
