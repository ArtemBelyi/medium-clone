import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TagListComponent } from './componets/tag-list/tag-list.component';



@NgModule({
  declarations: [
    TagListComponent
  ],
  exports: [
    TagListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class TagListModule { }
