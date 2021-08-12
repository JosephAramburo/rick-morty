import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiRestInterface } from '@interfaces/api-rest-interface';
import { environment } from '@env/environment';
import { Observable } from 'rxjs';
import { EpisodeInterface } from '@interfaces/episode-interface';
import { EpisodeResponseInterface } from '@interfaces/episode-response-interface';

@Injectable({
  providedIn: 'root'
})
export class EpisodesService implements ApiRestInterface{
  apiUrl : string = `${environment.API}episode`;

  constructor(
    private httpClient : HttpClient
  ) { }

  get(): Observable<EpisodeResponseInterface> {
    return this.httpClient.get<EpisodeResponseInterface>(`${this.apiUrl}`);
  }

  getByIds(ids: string): Observable<EpisodeInterface[]> {
    return this.httpClient.get<EpisodeInterface[]>(`${this.apiUrl}/${ids}`);
  }
}
