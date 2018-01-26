import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';


@Injectable()
export class SpotifyService {

  artistas: any[] = [];

  constructor(public http: HttpClient) {
    console.log('en el service');
  }

  getArtistas() {
    const uri = 'https://api.spotify.com/v1/search?query=metallica&type=artist&market=US&offset=0&limit=20';
    const headers = new HttpHeaders({
      'authorization': 'Bearer BQBUhVMohfB3BpAqSURzZEyZAMXyVmnc48xYYKvKbHyO1C2vE-aRxUZH0kpmwA1ho-G-T9mn1xn4wSmPHog'
    });
    return this.http.get(uri, { headers: headers })
      .map((respuesta: any) => {
        this.artistas = respuesta.artists.items;
        return this.artistas;

      })
      ;

  }

}
