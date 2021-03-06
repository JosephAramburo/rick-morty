import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiRestInterface } from '@interfaces/api-rest-interface';
import { environment } from '@env/environment';
import { Observable } from 'rxjs';
import { CharacterInterface } from '@interfaces/character-interface';
import { CardItemInterface } from '@interfaces/card-item-interface';

@Injectable({
  providedIn: 'root'
})
export class CharacterService implements ApiRestInterface{
  apiUrl : string = `${environment.API}character`;

  constructor(
    private httpClient : HttpClient
  ) { }
  getById(id: string): Observable<any> {
    throw new Error('Method not implemented.');
  }

  get(): Observable<CharacterInterface> {
    return this.httpClient.get<CharacterInterface>(this.apiUrl)
  }

  getByIds(ids: string): Observable<CardItemInterface[]> {
    return this.httpClient.get<CardItemInterface[]>(`${this.apiUrl}/${ids}`)
  }
}
