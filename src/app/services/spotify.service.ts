import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { HttpHeaderResponse } from '@angular/common/http/src/response';



@Injectable()
export class SpotifyService {

  artistas: any[] = [];
  access_token: string;
  urlSpotify = 'https://api.spotify.com/v1/';


  constructor(public http: HttpClient) {
    console.log('en el service');
  }
  // get token
  getToken() {
    const uri = 'https://accounts.spotify.com/api/token';
    const headers = {
      'Authorization': 'Basic ' + btoa('a4feb583efa847a781ac704c1ee87f90:79875079cd06457db445a3ba6fbc7a48'),
      'Content-Type': 'application/x-www-form-urlencoded'
    };
    const params = ('grant_type=client_credentials');
    return this.http
      .post(uri, params, { headers: headers })
      .map((respuesta: any) => {
        return respuesta;
      });
  }

  getArtistas(termino: string, token: string) {
    const uri = this.urlSpotify + `search?query=${termino}&type=artist&market=US&offset=0&limit=20`;
    return this.http.get(uri, { headers: this.getHeaders(token) })
      .map((respuesta: any) => {
        this.artistas = respuesta.artists.items;
        return this.artistas;
      });
  }

  getArtista(id: string, token: string) {
    const uri = this.urlSpotify + `artists/${id}`;
    return this.http.get(uri, { headers: this.getHeaders(token) });
  }

  getTop(id: string, token: string) {
    const uri = this.urlSpotify + `artists/${id}/top-tracks?country=US`;
    return this.http.get(uri, { headers: this.getHeaders(token) });
  }

  private getHeaders(token: string): HttpHeaders {
    const headers = new HttpHeaders({
      'authorization': `Bearer ${token}`
    });
    return headers;
  }

}
