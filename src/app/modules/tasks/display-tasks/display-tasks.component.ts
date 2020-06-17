import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { of } from 'rxjs';
import { Task } from '../../../shared/models/task'
import { TasksService } from '../../../services/tasks.service'

@Component({
  selector: 'app-display-tasks',
  templateUrl: './display-tasks.component.html',
  styleUrls: ['./display-tasks.component.css']
})
export class DisplayTasksComponent implements OnInit {
  tasks: Task[];

  constructor(private tasksService : TasksService) { }

  getTasks() : void {
    console.log("getting the tasks");
    this.tasksService.getTasks().subscribe(t => (this.tasks =t));
  }

  ngOnInit(): void {
    this.getTasks();
  }

  onDeleteTask(id: number) : void {
    console.log(id)
    this.tasksService.deleteTask(id).subscribe(t=>this.getTasks());
  }


}


  

  

  

  