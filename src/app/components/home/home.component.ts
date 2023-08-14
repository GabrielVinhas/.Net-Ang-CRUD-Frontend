import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  title = 'UsersCRUD';
  users: User[] = [];
  userToEdit?: User;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getUsers().subscribe(
      (result: User[]) => (this.users = result)
    );
  }

  updateUserList(users: User[]) {
    this.users = users;
  }

  /*initNewUser() {
    this.userToEdit = new User();
  } não será usado*/

  /*editUser(user: User) {
    this.userToEdit = user;
  } não será usado*/

  deleteUser(user: User) {
    this.userService.deleteUser(user).subscribe((users: User[]) => {
      this.updateUserList(users);
      alert('Usuário excluído');
    });
  }
}
