import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UserTask } from '../user/user.model';
@Component({
  selector: 'app-task',
  standalone: true,
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Output() selectTask=new EventEmitter<string>()
  @Input({required:true}) user?:UserTask;

  onComplete(){
    return this.selectTask.emit(this.user?.id)
  }

}
