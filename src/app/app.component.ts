import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-music-app';
  musicGenre = [{name: 'testgenre1', description: 'This is my test1', type: 'classic'},
                {name: 'testgenre2', description: 'This is my test2', type: 'rock'}];

 addSong(addedSong: {name: string, description: string}){
  this.musicGenre.push({
    type: "rock",
    name: addedSong.name,
    description: addedSong.description
  });

 }

              
}
