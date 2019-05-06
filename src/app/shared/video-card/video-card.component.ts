import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';

import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-video-card',
  templateUrl: './video-card.component.html',
  styleUrls: ['./video-card.component.scss']
})
export class VideoCardComponent implements OnInit, OnChanges {

  @Output() videoSelect: EventEmitter<any> = new EventEmitter<any>();
  @Input() public video: any;

  constructor() { }

  ngOnInit() { }

  ngOnChanges() {
    if (this.video) {
      this.video.url = `${environment.endPoint}/screenshot/${this.video.id}`;
    }
  }

  changeVideo(event) {
    event.stopPropagation();
    this.videoSelect.emit(this.video);
  }

}
