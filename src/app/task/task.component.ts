import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UserTask } from '../user/user.model';
import { CardComponent } from "../shared/card/card.component";
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CardComponent,DatePipe],
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
