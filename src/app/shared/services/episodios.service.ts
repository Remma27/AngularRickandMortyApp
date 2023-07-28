import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EpisodiosResponse } from 'src/app/shared/models/EpisodiosResponse';

@Injectable({
  providedIn: 'root',
})
export class EpisodiosService {
  private apiUrl = 'https://rickandmortyapi.com/api/episode';

  constructor(private http: HttpClient) {}

  getEpisodios(page?: number): Observable<EpisodiosResponse> {
    const url = page ? `${this.apiUrl}?page=${page}` : this.apiUrl;
    return this.http.get<EpisodiosResponse>(url);
  }
}
