import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';

import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-video-card',
  templateUrl: './video-card.component.html',
  styleUrls: ['./video-card.component.scss']
})
export class VideoCardComponent implements OnInit, OnChanges {

  @Output() videoSelect: EventEmitter<any> = new EventEmitter<any>();
  @Input() private video: any;
  url: string;

  constructor() { }

  ngOnInit() { }

  ngOnChanges() {
    if (this.video) {
      this.url = `${environment.endPoint}/thumbnail/${this.video.id}`;
    }
  }

  changeVideo(event) {
    event.stopPropagation();
    this.videoSelect.emit(this.video);
  }

}
