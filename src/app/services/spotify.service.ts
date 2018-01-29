import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';


@Injectable()
export class SpotifyService {

  artistas: any[] = [];

  constructor(public http: HttpClient) {
    console.log('en el service');
  }

  getArtistas(termino: string) {
    const uri = `https://api.spotify.com/v1/search?query=${ termino }&type=artist&market=US&offset=0&limit=20`;
    const headers = new HttpHeaders({
      'authorization': 'Bearer BQBeLCFbDJk5oR7S0GtKQ6XTs3lT1FKWX6eAohiyLjuB5oNzpk8zU3OEX5gp4m7MZpZSy1AULJ8L_YNT7_w'
    });
    return this.http.get(uri, { headers: headers })
      .map((respuesta: any) => {
        this.artistas = respuesta.artists.items;
        return this.artistas;

      })
      ;

  }

}
