import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VideosRoutingModule } from './videos-routing.module';
import { SharedModule } from '../shared/shared.module';

import { ListComponent } from './list/list.component';
import { UploadComponent } from './upload/upload.component';

@NgModule({
  imports: [
    VideosRoutingModule,
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    ListComponent,
    UploadComponent
  ],
  exports: [
    ListComponent,
  ]
})
export class VideosModule { }
