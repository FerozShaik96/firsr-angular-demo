import { Component, input, Input,computed, Output, EventEmitter, output } from '@angular/core';
import { User } from './user.model';
import { CardComponent } from "../shared/card/card.component";

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Output() select= new EventEmitter<string>()
  // select=output<string>()
  @Input({required:true}) user! :User
  @Input({required:true}) selected!:boolean
  // name=input.required<string>()
  // id=input.required<string>()
 
  get imagePath(){
    return 'assets/users/'+this.user.avatar
  }
  onSelectElement(){
    this.select.emit(this.user.id)
    // this.select.emit(this.id())
  }
}
