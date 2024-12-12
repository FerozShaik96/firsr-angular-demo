import { Component, EventEmitter, Input, Output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TaskData } from '../../user/user.model';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Output() close=new EventEmitter<void>()
  @Output() add=new EventEmitter<TaskData>()
  enteredTitle=""
  enteredSummary=""
  enteredDate=""
  onCancel(){
    return this.close.emit()
  }
  onSubmit(){
    this.add.emit({
      title:this.enteredTitle,
      summary:this.enteredSummary,
      date:this.enteredDate
    })
  }

}
