import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SnackBarService } from '../services/snack-bar.service';
import { PaginationComponent } from './pagination/pagination.component';
import { ModalComponent } from './modal/modal.component';
import { LoaderComponent } from './loader/loader.component';
import { PlayerComponent } from './player/player.component';
import { VideoCardComponent } from './video-card/video-card.component';

@NgModule({
  declarations: [
    PaginationComponent,
    ModalComponent,
    LoaderComponent,
    PlayerComponent,
    VideoCardComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    SnackBarService
  ],
  exports: [
    PaginationComponent,
    ModalComponent,
    LoaderComponent,
    PlayerComponent,
    VideoCardComponent
  ]
})
export class SharedModule { }
