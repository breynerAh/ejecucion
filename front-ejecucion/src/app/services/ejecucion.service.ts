import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class EjecucionService {
  constructor(private http: HttpClient) { }
  private URL = 'http://localhost:5006/api/v1';

  createValoresContratosBrig(value: any): Observable<any> {
    return this.http.post<any>(`${this.URL}/createValoresContratosBrig`, value);
  }
}
