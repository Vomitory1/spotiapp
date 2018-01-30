import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { RequestOptions } from 'http';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class SpotifyService {

  artistas: any[] = [];


  constructor(public http: HttpClient) {
    console.log('en el service');
  }

  getToken() {
    const uri = 'https://accounts.spotify.com/api/token';
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    });

    const body = JSON.stringify({
      grant_type: 'client_credentials',
      client_id: 'a4feb583efa847a781ac704c1ee87f90',
      client_secret: '79875079cd06457db445a3ba6fbc7a48'
    });

    return this.http
      .post(uri, body, { headers: headers })
      .map(this.extractData).subscribe();
  }

  private extractData(res: Response) {
    const body = res.json();
    return body || {};
  }

  getArtistas(termino: string) {
    const uri = `https://api.spotify.com/v1/search?query=${termino}&type=artist&market=US&offset=0&limit=20`;
    const headers = new HttpHeaders({
      'authorization': 'Bearer BQDHCfNCrG3eP2vJf3R6upMpCk3LH-4Q82XSD0ic_Ynvhca7Pa7qrk1MaT65SVb6K8qDJuIycDIXVoRy_KA'
    });
    return this.http.get(uri, { headers: headers })
      .map((respuesta: any) => {
        this.artistas = respuesta.artists.items;
        return this.artistas;

      });
  }
  private handleError(error: any) {
    const errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

}
