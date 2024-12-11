import { Component } from '@angular/core';
import { headerComponent } from "./header/header.component";
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from './user/dummy.component';
import { TasksComponent } from './tasks/tasks.component';
import { NgFor ,NgIf} from '@angular/common';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [headerComponent,UserComponent,TasksComponent,NgFor,NgIf],
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
