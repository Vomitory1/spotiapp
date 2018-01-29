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
        console.log('en artist');
        console.log(id);
      });
  }

}
