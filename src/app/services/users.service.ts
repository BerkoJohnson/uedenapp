import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export interface IUser {
  _id?: string;
  username: string;
  password?: string;
  role: string | string[];
  createdAt?: Date;
  updatedAt?: Date;
}

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  _users = new BehaviorSubject<IUser[]>([]);
  users$ = this._users.asObservable();

  constructor(private http: HttpClient) {
    this.loadUsers();
  }

  loadUsers() {
    this.getUsers().subscribe(docs => this._users.next(docs));
  }

  getUsers(): Observable<IUser[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        auth:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI1Y2Q2YjFmMTg3NDAwMjJkYTFkNDI1NzgiLCJ1c2VybmFtZSI6ImFkbWluIiwicm9sZSI6IkFETUlOIiwiaWF0IjoxNTU3NzUwMDEwLCJleHAiOjE1NTc3NTM2MTB9.sUWZ8F9XWRimE1tOb6JlaC1m6PmPMfhSYmtK8nJccwo'
      })
    };
    return this.http.get<IUser[]>('/api/users', httpOptions);
  }
}
