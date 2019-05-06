import { Component, OnInit } from '@angular/core';

import { environment } from '../../environments/environment';
import { VideoService } from '../services/video.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  loading: boolean;
  videos: any[];
  video: any;

  constructor(private videoService: VideoService) { }

  ngOnInit() {
    this.videos = [];
    this.videos.push({ description: 'Video #2019-01-26_12.40.50.mp4', id: '2019-01-26_12.40.50.mp4' });
    this.videos.push({ description: 'Video #2019-01-26_12.43.39.mp4', id: '2019-01-26_12.43.39.mp4' });
    this.videos.push({ description: 'Video #2019-01-27_11.26.06.mp4', id: '2019-01-27_11.26.06.mp4' });
    this.videos.push({ description: 'Video #2019-01-22_19.47.44.mp4', id: '2019-01-22_19.47.44.mp4' });

    this.video = this.videos.pop();
  }

  changeVideo(video) {
    this.videos.push(this.video);
    this.video = video;
    this.videos.splice(this.videos.indexOf(video), 1);
  }
}
