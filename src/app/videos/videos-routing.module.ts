import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListComponent } from './list/list.component';
import { UploadComponent } from './upload/upload.component';

const routes: Routes = [
  { path: 'list', component: ListComponent },
  { path: 'upload', component: UploadComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VideosRoutingModule { }
