import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { TaskPageComponent } from "./modules/task-page/task-page.component";
import { EditFormComponent } from "./modules/edit-form/edit-form.component";
import { DisplayTasksComponent } from "./modules/tasks/display-tasks/display-tasks.component";
import { TaskFormComponent } from "./shared/components/task-form/task-form.component";


const routes: Routes = [
  {
    path: 'tasks/:id',
    component: TaskPageComponent
  },
  {
    path: 'tasks',
    component: DisplayTasksComponent
  },
  {
    path: 'form',
    component: TaskFormComponent
  },
  {
    path: 'task/edit/:id',
    component: EditFormComponent
  },
  { path: '',
    redirectTo: 'tasks', 
    pathMatch: 'full' 
  }
];

@NgModule({
  imports: [
        CommonModule,
        RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}