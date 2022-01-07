import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Plat } from '../models/Plat';

@Injectable({
  providedIn: 'root'
})
export class PlatService {

  constructor(private http: HttpClient) { }

  getPlats():Observable<Plat[]>{
   return this.http.get<Plat[]>(environment.API.baseUrl + '/plats');
  }

  addPlat(plat: Plat):Observable<Plat>{
    return this.http.post<Plat>(environment.API.baseUrl+'/plats', plat);
  }

  updatePlat(plat:Plat):Observable<Plat>{
    return this.http.put<Plat>(environment.API.baseUrl + '/plats/' + plat.id, plat);
  }
}
