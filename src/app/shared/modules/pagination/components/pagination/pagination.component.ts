import { Component, Input, OnInit } from '@angular/core';
import { getRange } from '../../../../services/utils.services';

@Component({
  selector: 'mc-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
  @Input() totalCount: number = 0
  @Input() currentPage: number = 0
  @Input() url: string = ''
  @Input() limit: number = 0

  pagesCount: number;

  ngOnInit() {
    this.pagesCount = Math.ceil(this.totalCount / this.limit)
  }

  get pages(): Array<number> {
    return getRange(1, this.pagesCount, 1);
  }
}
