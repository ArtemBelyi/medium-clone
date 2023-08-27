import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducers } from './store/reducers/reducers';
import { PopularTagsEffect } from './store/effects/popularTags.effect';
import { PopularTagsComponent } from './components/popular-tags/popular-tags.component';
import { LoadingModule } from '../loading/loading.module';
import { ErrorMessageModule } from '../error-message/error-message.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [PopularTagsComponent],
  exports: [PopularTagsComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature('tags', reducers),
    EffectsModule.forFeature([PopularTagsEffect]),
    RouterModule,
    LoadingModule,
    ErrorMessageModule
  ]
})
export class PopularTagsModule { }
