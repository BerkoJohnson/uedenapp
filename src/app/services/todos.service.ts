import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

export interface ITodo {
  _id?: string;
  text: string;
}

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  _todos = new BehaviorSubject<ITodo[]>([]);
  todos$ = this._todos.asObservable();

  constructor(private http: HttpClient) { }

  getTodos() {}
}
