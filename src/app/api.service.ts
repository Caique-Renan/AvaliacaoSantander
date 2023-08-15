import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserDetails } from './user-detail.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'https://dummyapi.io/data/v1/';
  private headers = new HttpHeaders().set('app-id', '64cbeddc2535491d86990b6e');

  constructor(private http: HttpClient) { }

  getUsers(): Observable<any> {
    return this.http.get(`${this.apiUrl}user`, { headers: this.headers });
  }

  getUserDetails(userId: string): Observable<any> {
    return this.http.get(`${this.apiUrl}user/${userId}`, { headers: this.headers });
  }

  deleteUser(userId: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}user/${userId}`, { headers: this.headers });
  }

  createUser(userData: any): Observable<any> {
    const url = `${this.apiUrl}user`;
    return this.http.post(url, userData, { headers: this.headers });
  }

  updateUserDetails(userId: string, userData: UserDetails): Observable<any> {
    const url = `${this.apiUrl}user/${userId}`;
    return this.http.put(url, userData, { headers: this.headers });
  }
}
