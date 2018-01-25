import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent  {

  //Inyeccion del servicio spotify
  constructor(public _spotify: SpotifyService) {
  this._spotify.getArtistas().subscribe( respuesta => {
    console.log(respuesta);
  }) ;
}

  // ngOnInit() {
  //   console.log('init search');
  // }

}
