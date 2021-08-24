import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsersListComponent implements OnInit {
  @Input() users: User[];
  @Output() deleteUser = new EventEmitter<string>();
  @Output() selectUser = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  trackUser(index: number, user: User){
    return user._id
  }

  onDeleteUser(userId: string) {
      this.deleteUser.emit(userId);
  }

  onSelectUser(userId: string){
    this.selectUser.emit(userId);
  }
}
