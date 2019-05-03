import { Component, OnInit, Input, OnChanges } from '@angular/core';

import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit, OnChanges {

  @Input() private video: any;
  url: string;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    if (this.video) {
      this.url = null;
      setTimeout(() => { this.url = `${environment.endPoint}/movies/${this.video.id}`; }, 1);
    }
  }

}
