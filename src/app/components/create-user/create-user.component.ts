import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from '../../models/user';
import { UserService } from './../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {
  user: User = new User()
  @Output() usersUpdated = new EventEmitter<User[]>();

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {}

  createUser(user:User) {
    this.userService
    .createUser(user)
    .subscribe((users: User[]) => this.usersUpdated.emit(users));
    alert('Usuário cadastrado!')
    this.router.navigate(['']);
  }
}
