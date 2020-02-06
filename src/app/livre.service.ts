import { Injectable } from '@angular/core';
import {HttpHeaders, HttpClient} from '@angular/common/http';
import {Livre} from './livre'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LivreService {
  livreUrl = "http://localhost:5000/livres"

  constructor(
   private  http: HttpClient) { }

  getLivre() : Observable<Livre[]> {
    return this.http.get<Livre[]>(this.livreUrl)
    }
  addLivre(titre:string,numero:number,pages:string): Observable<Livre>{
    return this.http.post<Livre>(this.livreUrl, { "titre":titre, "numero":numero,"pages":pages})
  }
  deleteLivre(numero:number): Observable<Livre> {
    return this.http.delete<Livre>(this.livreUrl+"/"+numero)
  }
  update(titre:string,numero:number,pages:string): Observable<Livre> {
    return this.http.put<Livre>(this.livreUrl, { "titre":titre, "numero":numero,"pages":pages})
  }

  
}
