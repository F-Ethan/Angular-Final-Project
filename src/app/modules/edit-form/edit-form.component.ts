import { switchMap } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { Observable } from 'rxjs';

import { TasksService } from '../../services/tasks.service';
import { Task } from '../../shared/models/task';

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.css']
})
export class EditFormComponent implements OnInit {
  model: Task = new Task();
  
  constructor(private tasksService: TasksService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(param => {
      this.tasksService.getTask(+param["id"]).subscribe(t => (this.model = t));
    });
  }

  onSubmit() {
    this.tasksService.editTask(this.model).subscribe(t => this.router.navigate(["tasks"]));
  }
}

