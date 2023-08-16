import { Component, Input } from '@angular/core';

@Component({
  selector: 'mc-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent {
  @Input() totalCount: number = 0
  @Input() currentPage: number = 0
  @Input() url: string = ''
  @Input() limit: number = 0
}
