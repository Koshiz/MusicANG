import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MusicComponent } from './music/music.component';
import { MusicGenreComponent } from './music/music-genre/music-genre.component';
import { MusicListComponent } from './music/music-list/music-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MusicComponent,
    MusicGenreComponent,
    MusicListComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
