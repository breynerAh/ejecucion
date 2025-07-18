import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class OvertimeService {
  private URL = 'http://localhost:5001/api/v1';

  activeLoadWait$ = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient) { }

  private getHeaders(): HttpHeaders {
    const token = localStorage.getItem('authToken'); // Ahora solo se llama cuando hay navegador

    return new HttpHeaders({
      'Autorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
      'appid': '2'
    });
  }

  getBusiness2(): Observable<any> {
    return this.http.get<any>(`${this.URL}/business/admin`, { headers: this.getHeaders() });
  }

  getOperationxBusinessIdAdmin(emprId: any): Observable<any> {
    console.log(emprId, 999009)
    return this.http.get<any>(`${this.URL}/operation/business/admin/${emprId}`, { headers: this.getHeaders() });
  }

  getContractsxOperationIdAdmin(operId: any) {
    return this.http.get<any>(`${this.URL}/contract/operation/admin/${operId}`, { headers: this.getHeaders() });
  }

  /*   getDivisionsxContractId(contrid: any) {
      return this.http.get<any>(`${this.URL}/division/contract/${contrid}`, { headers: this.getHeaders() });
    }

    getDivisionsDeletexContractId(contrid: any) {
      return this.http.get<any>(`${this.URL}/division/contract/delete/${contrid}`, { headers: this.getHeaders() });
    } */
}
