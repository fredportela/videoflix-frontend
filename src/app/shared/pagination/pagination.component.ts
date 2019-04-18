import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { ScrollToService } from '@nicky-lenaers/ngx-scroll-to';
import { Pages } from '../../models/pages.model';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

  @Output() setPage = new EventEmitter();
  @Input() pagination: Pages;

  constructor(private _scrollToService: ScrollToService) { }

  ngOnInit() {
  }

  setPagination(page: number) {
    this._scrollToService.scrollTo({ target: 'navbar' });

    this.setPage.emit(page);
  }
}
