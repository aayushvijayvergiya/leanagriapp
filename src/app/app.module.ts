import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from  '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { NavComponent } from './component/nav-component/nav-component.component';
import * as Service from './services/service.pathconfig';
import { PostDetailComponent } from './component/post-detail/post-detail.component';
import { AddPostComponent } from './component/add-post/add-post.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    PostDetailComponent,
    AddPostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    HttpClientModule
  ],
  providers: [
    Service.ApiConfigService,
    Service.ApiHttpService,
    Service.ApiMainService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
