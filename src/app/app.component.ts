import { Component } from '@angular/core';
import { DUMMY_USERS } from './user/dummy.component';
@Component({
  selector: 'app-root',
  // standalone: true,
  // imports: [headerComponent,TasksComponent,NgFor,NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users=DUMMY_USERS
  selectedUserId?:string
  get userSelected(){
    return this.users.find((user)=>user.id===this.selectedUserId)
  }

  onSelectUser(id:string){
    this.selectedUserId=id
  }
}
