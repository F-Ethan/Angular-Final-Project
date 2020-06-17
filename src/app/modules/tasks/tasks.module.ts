import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { DisplayTasksComponent } from './display-tasks/display-tasks.component';
import { DisplayTaskComponent } from './components/display-task/display-task.component';



@NgModule({
  imports: [CommonModule, HttpClientModule],
  declarations: [DisplayTasksComponent, DisplayTaskComponent],
  exports: [DisplayTasksComponent]
})
export class TasksModule { }

