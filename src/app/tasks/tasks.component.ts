import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TasksService } from './tasks.service';
import { User } from '../user/user.model';

 @Component({
  selector: 'app-tasks',
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
