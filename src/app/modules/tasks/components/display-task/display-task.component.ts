import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';

import { Task } from '../../../../shared/models/task';
import { TasksService } from '../../../../services/tasks.service';

@Component({
  selector: 'app-display-task',
  templateUrl: './display-task.component.html',
  styleUrls: ['./display-task.component.css']
})
export class DisplayTaskComponent implements OnInit {
  @Input() task: Task;
  @Output() TaskDeleted: EventEmitter<number> = new EventEmitter();

  constructor(private tasksService: TasksService, private router: Router, private route: ActivatedRoute) { }


  ngOnInit() {}

  onClickDelete() {
    this.TaskDeleted.emit(this.task.id);
  }


  routTo(id){
    let url = "tasks/" + id.toString();
    console.log(url)
    this.router.navigate([url])
  }
}

