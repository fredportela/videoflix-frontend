import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SnackBarService } from '../services/snack-bar.service';
import { PaginationComponent } from './pagination/pagination.component';
import { ModalComponent } from './modal/modal.component';
import { LoaderComponent } from './loader/loader.component';

@NgModule({
  declarations: [
    PaginationComponent,
    ModalComponent,
    LoaderComponent
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
    LoaderComponent
  ]
})
export class SharedModule { }
