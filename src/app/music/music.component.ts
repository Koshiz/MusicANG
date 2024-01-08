import { Component } from '@angular/core';

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrl: './music.component.css'
})
export class MusicComponent {

  btnVisible: boolean = false;
  favGenre: string;

  constructor() {
    setTimeout(() => {
      this.btnVisible = true;
    }, 2000)
  }

  

}
