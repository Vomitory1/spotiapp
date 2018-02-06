import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html'
})
export class ArtistComponent implements OnInit {


  constructor(private activatedRoute: ActivatedRoute, public _spotify: SpotifyService) {
  }


  ngOnInit() {
    this.activatedRoute.params
      .map(params => params['id'])
      .subscribe(id => {
        this._spotify.getToken().subscribe(respuesta => {
          this._spotify.getArtista(id, respuesta.access_token).subscribe(
            artista => {
              console.log(artista);
            });
        });
      });
  }

}
