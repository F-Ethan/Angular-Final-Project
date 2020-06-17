import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Task } from '../shared/models/Task';

import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  url: string = "http://localhost:3000/task";

  constructor(private http : HttpClient) { }

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.url);
  };

  addTask(task: Task): Observable<Task> {
    return this.http.post<Task>(this.url, task);
  };

  getTaskById(id: number): Observable<Task> {
    return this.http.get<Task>(this.url + "/" + id);
  };

  deleteTask(id: number): Observable<Task> {
    return this.http.delete<Task>(this.url + "/" + id);
  };
  editTask(task: Task): Observable<Task> {
    return this.http.put<Task>(this.url + "/" + task.id, task);
  };
  getTask(id: number): Observable<Task> {
    return this.http.get<Task>(this.url + "/" + id);
  };

}