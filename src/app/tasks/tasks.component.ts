import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { TasksService } from './tasks.service';
import { User } from '../user/user.model';
import { NewTaskComponent } from './new-task/new-task.component';
import { TaskData } from '../user/user.model';

 @Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent,NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({required:true}) user!:User 
  isAddingTask:boolean=false
  // private tasksService:TasksService
  // constructor( tasksService:TasksService){
  //   this.tasksService=tasksService;
  // }
  constructor(private tasksService:TasksService){}
  get getTask(){
    return this.tasksService.getUserTask(this.user.id)
  }
  onStartAddTask(){
    this.isAddingTask=true
  }
  onCloseAddTask(){
    this.isAddingTask=false
  }
}
