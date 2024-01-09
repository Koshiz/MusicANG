import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-music-genre',
  templateUrl: './music-genre.component.html',
  styleUrl: './music-genre.component.css'
})
export class MusicGenreComponent {
  @Input() genre: {name: string, description: string, type: string};

  songAdded;
  

}
