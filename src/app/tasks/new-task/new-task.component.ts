import { Component, EventEmitter, Input, Output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Output() close=new EventEmitter<void>()
  enteredTitle=signal("")
  enteredSummary=signal("")
  enteredDate=signal("")
  onCancel(){
    return this.close.emit()
  }

}
