import { Component, Input, OnInit } from '@angular/core';
import { BackendErrors } from '../../../../types/backend-errors';

@Component({
  selector: 'mc-backend-error-messages',
  templateUrl: './backend-error-messages.component.html',
  styleUrls: ['./backend-error-messages.component.scss'],
})
export class BackendErrorMessagesComponent implements OnInit {
  @Input('backendErrors') backendErrorsProps!: BackendErrors | null;

  errorMessages!: Array<string>;

  ngOnInit() {
    if (this.backendErrorsProps) {
      const messages = Object.entries(this.backendErrorsProps);
      this.errorMessages = messages.map(([name, msg]) => {
        return `${name}: ${msg}`;
      });
    }
  }
}
