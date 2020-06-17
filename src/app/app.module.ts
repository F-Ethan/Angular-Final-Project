import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskFormComponent } from './shared/components/task-form/task-form.component';
import { TasksModule } from './modules/tasks/tasks.module';

import { TasksService } from './services/tasks.service';
import { TaskPageComponent } from './modules/task-page/task-page.component';
import { EditFormComponent } from './modules/edit-form/edit-form.component'

@NgModule({
  declarations: [
    AppComponent,
    TaskFormComponent,
    TaskPageComponent,
    EditFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TasksModule,
    FormsModule
    
  ],
  providers: [TasksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
