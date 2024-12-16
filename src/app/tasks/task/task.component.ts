import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { UserTask } from '../../user/user.model';
import { TasksService } from '../tasks.service';
@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input({required:true}) user!:UserTask;
  private tasksService=inject(TasksService)

  onComplete(){
    this.tasksService.removeTask(this.user.id)
  }

}
