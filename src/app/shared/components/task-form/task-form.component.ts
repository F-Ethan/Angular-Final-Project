import { Component, OnInit } from '@angular/core';
import { Task } from "../../models/task";
import { Router } from '@angular/router';

import { TasksService } from '../../../services/tasks.service';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {
  model: Task = new Task();
  
  constructor(private tasksService: TasksService, private router : Router) { }

  ngOnInit() {
  }

  onSubmit() {
    this.tasksService.addTask(this.model).subscribe(t=> this.router.navigate(["tasks"]));
  }
}

