import { switchMap } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { Observable } from 'rxjs';



import { TasksService } from '../../services/tasks.service';
import { Task } from '../../shared/models/task';


@Component({
  selector: 'app-hero-detail',
  templateUrl: './task-page.component.html',
  styleUrls: ['./task-page.component.css']
})
export class TaskPageComponent implements OnInit {
  myTask: Task;
  id: number;

  constructor(private tasksService: TasksService, private route: ActivatedRoute,) { }

  getTasks() {
    throw new Error("Method not implemented.");
  };

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = +params["id"];
      this.tasksService.getTaskById(this.id).subscribe(task => (this.myTask = task));
    });
  }
  

  onDeleteTask(id: number): void {
    this.tasksService.deleteTask(this.id).subscribe(task => this.getTasks());
    if(confirm("Your task has been deleted. Return to the List")) {
      console.log("Implement delete functionality here");
    } 
  };

  

  

}
