import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AuthModule } from './auth/auth.module';
import { AppComponent } from './app.component';
import { TagFeedModule } from './tag-feed/tag-feed.module';
import { StoreModule } from '@ngrx/store';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { CommonModule } from '@angular/common';
import { LoadingModule } from './shared/modules/loading/loading.module';
import { PopularTagsModule } from './shared/modules/popular-tags/popular-tags.module';
import { TopBarModule } from './shared/modules/top-bar/tob-bar.module';
import { GlobalFeedModule } from './globalFeed/global-feed.module';
import { StoreRouterConnectingModule, routerReducer } from '@ngrx/router-store';
import { YourFeedModule } from './your-feed/your-feed.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    TopBarModule,
    GlobalFeedModule,
    BrowserModule,
    AppRoutingModule,
    PopularTagsModule,
    TagFeedModule,
    YourFeedModule,
    CommonModule,
    LoadingModule,
    AuthModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    StoreModule.forRoot({ router: routerReducer }),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: !isDevMode(),
      autoPause: true,
      trace: false,
      traceLimit: 75,
    }),
    StoreRouterConnectingModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
