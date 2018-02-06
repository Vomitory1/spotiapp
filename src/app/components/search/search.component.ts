import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent {

  termino = '';
  access_token = '';

  // Inyeccion del servicio spotify
  constructor(public _spotify: SpotifyService) {

  }

  buscarArtistas() {
    if (this.termino.length === 0) {
      return;
    }
    this._spotify.getToken().
      subscribe(respuesta => {
        this._spotify.getArtistas(this.termino, respuesta.access_token).
          subscribe(res => {
            console.log(res);
          });
      });
  }

  // ngOnInit() {
  //   console.log('init search');
  // }

}
