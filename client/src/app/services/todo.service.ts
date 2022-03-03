import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Todo } from '../interfaces/todo.interface';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private apiUrl = 'http://localhost:2345/todos';

  constructor(private httpClient: HttpClient) {}

  getTodos(): Observable<Todo[]> {
    return this.httpClient.get<Todo[]>(this.apiUrl);
  }

  deleteTodoById(todo: Todo): Observable<Todo> {
    const deleteUrl = `${this.apiUrl}/${todo.id}`;
    return this.httpClient.delete<Todo>(deleteUrl);
  }

  updateTodoById(todo: Todo): Observable<Todo> {
    const updateUrl = `${this.apiUrl}/${todo.id}`;
    return this.httpClient.put<Todo>(updateUrl, todo, httpOptions);
  }


  addTodo(todo: Todo): Observable<Todo> {
    return this.httpClient.post<Todo>(this.apiUrl, todo, httpOptions);
  }
}
