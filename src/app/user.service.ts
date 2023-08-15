import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'https://dummyapi.io/data/v1/';
  private headers = new HttpHeaders().set('app-id', 'SEU_APP_ID_AQUI');

  constructor(private http: HttpClient) { }

  // Exemplo de método para listar usuários
getUsers(): Observable<any> {
  return this.http.get(`${this.apiUrl}user`, { headers: this.headers });
}

// Exemplo de método para exibir um único usuário
getUserById(userId: string): Observable<any> {
  return this.http.get(`${this.apiUrl}user/${userId}`, { headers: this.headers });
}

// Exemplo de método para criar um usuário
createUser(userData: any): Observable<any> {
  return this.http.post(`${this.apiUrl}user/create`, userData, { headers: this.headers });
}

// Exemplo de método para atualizar um usuário
updateUser(userId: string, userData: any): Observable<any> {
  return this.http.put(`${this.apiUrl}user/${userId}`, userData, { headers: this.headers });
}

// Exemplo de método para excluir um usuário
deleteUser(userId: string): Observable<any> {
  return this.http.delete(`${this.apiUrl}user/${userId}`, { headers: this.headers });
}

}
