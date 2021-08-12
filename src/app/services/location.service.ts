import { Injectable } from '@angular/core';
import { ApiRestInterface } from '@interfaces/api-rest-interface';
import { LocationInterface } from '@interfaces/location-interface';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root'
})
export class LocationService implements ApiRestInterface {
  apiUrl : string = `${environment.API}location`;
  
  constructor(
    private httpClient : HttpClient
  ) { }

  getById(id: string): Observable<any> {
    throw new Error('Method not implemented.');
  }

  get(): Observable<LocationInterface> {
    return this.httpClient.get<LocationInterface>(this.apiUrl)
  }

  getByIds(ids: string): Observable<any[]> {
    throw new Error('Method not implemented.');
  }
}
