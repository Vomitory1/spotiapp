import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';


@Injectable()
export class SpotifyService {

  artistas:any [] = [];

  constructor(public http: HttpClient ) {
    console.log('en el service');
   }

   getArtistas(){
     let uri = 'https://api.spotify.com/v1/search?query=metallica&type=artist&market=US&offset=0&limit=20';
     let headers = new HttpHeaders({
          'authorization': 'Bearer BQDNYgLiX1u1SH4pAAw3kSqZt7_lRiAtJichLcVBNpvBPn_aQJSULrX6-jtshhlw3VGSKHySCrN6XHqx1y8'
       });
     return this.http.get(uri, {headers :headers})
            .map((respuesta : any) => {
              this.artistas = respuesta.artists.items
              return   this.artistas;

            })
     ;

   }

}
