import { Component, Input } from '@angular/core';

@Component({
  selector: 'mc-error-message',
  template: '<div>{{ messageProps }}</div>',
})
export class ErrorMessageComponent {
  @Input('messageError') messageProps: string = 'Something have gone wrong';
}
