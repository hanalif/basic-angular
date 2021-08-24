import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';

@Component({
  templateUrl: './whos-watching.component.html',
  styleUrls: ['./whos-watching.component.scss']
})
export class WhosWatchingComponent implements OnInit {
  users: User[] = [
    {
      _id: 'u101',
      name: 'Bobi',
      favTvShows: [
        'Mulan',
        'Game of thrones'
      ]
    },
    {
      _id: 'u102',
      name: 'Dan',
      favTvShows: [
        'Lost',
        'Tigers'
      ]
    },
    {
      _id: 'u103',
      name: 'Bina',
      favTvShows: [
        'Man in black',
        'Big brother'
      ]
    }
  ];

  currUser: User = null;

  constructor() { }

  ngOnInit(): void {

  }
  onDeleteUser(userId: string){
     const userIndex = this.users.findIndex(user=> user._id === userId);
      this.users.splice(userIndex, 1);
      console.log('deleted user')

  }
  onSelectUser(userId: string){
    const user = this.users.find(user=> user._id === userId);
    this.currUser = user
  }
  onCloseUserInfo(){
    this.currUser = null;
  }

}
