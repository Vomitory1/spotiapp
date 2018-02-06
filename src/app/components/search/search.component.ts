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

  buscarArtista() {
    if (this.termino.length === 0) {
      return;
    }
    this._spotify.getToken().subscribe(respuesta => {
      this.access_token = respuesta.access_token;
    });

    this._spotify.getArtistas(this.termino, this.access_token).subscribe(respuesta => {
      console.log(respuesta);
    });
  }

  // ngOnInit() {
  //   console.log('init search');
  // }

}
