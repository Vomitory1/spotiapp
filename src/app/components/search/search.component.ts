import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent {

  termino = '';

  // Inyeccion del servicio spotify
  constructor(public _spotify: SpotifyService) {

  }

  buscarArtista() {
    if (this.termino.length === 0) {
      return;
    }
    this._spotify.getArtistas(this.termino).subscribe(respuesta => {
      console.log(respuesta);
    });
  }

  // ngOnInit() {
  //   console.log('init search');
  // }

}
