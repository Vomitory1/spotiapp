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
      'authorization': 'Bearer BQDHCfNCrG3eP2vJf3R6upMpCk3LH-4Q82XSD0ic_Ynvhca7Pa7qrk1MaT65SVb6K8qDJuIycDIXVoRy_KA'
    });
    return this.http.get(uri, { headers: headers })
      .map((respuesta: any) => {
        this.artistas = respuesta.artists.items;
        return this.artistas;

      })
      ;

  }

}
