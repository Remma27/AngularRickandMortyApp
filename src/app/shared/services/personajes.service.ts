import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PersonajesResponse } from 'src/app/shared/models/PersonajesResponse';

@Injectable({
  providedIn: 'root',
})
export class PersonajesService {
  private apiUrl = 'https://rickandmortyapi.com/api/character';

  constructor(private http: HttpClient) {}

  getPersonajes(page?: number): Observable<PersonajesResponse> {
    const url = page ? `${this.apiUrl}?page=${page}` : this.apiUrl;
    return this.http.get<PersonajesResponse>(url);
  }
}
