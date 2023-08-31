import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'mc-tag-feed',
  templateUrl: './tag-feed.component.html',
  styleUrls: ['./tag-feed.component.scss']
})
export class TagFeedComponent implements OnInit {
  apiUrl: string;
  tagName: string | null;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.tagName = params["slug"]
      this.apiUrl = `/articles?tag=${this.tagName}`
    })
  }
}
