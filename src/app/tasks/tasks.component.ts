import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TaskComponent } from '../task/task.component';
import { dummyTasks } from './dummyTask.component';
 import { User } from '../user/user.model';
import { NewTaskComponent } from './new-task/new-task.component';

 @Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent,NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  userTask=dummyTasks
  @Input({required:true}) user!:User 
  isAddingTask:boolean=false
  get getTask(){
    return this.userTask.filter((data)=>data.userId===this.user?.id)
  }
   completeTask(task:string){
    return this.userTask= this.userTask.filter((data)=>data.id!==task)
  }
  onStartAddTask(){
    this.isAddingTask=true
  }
  onCancelAddTask(){
    this.isAddingTask=false
  }
}
