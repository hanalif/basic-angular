import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-user-preview',
  templateUrl: './user-preview.component.html',
  styleUrls: ['./user-preview.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserPreviewComponent implements OnInit {
  @Input() user: User;
  @Output() deleteUser = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }

  onDeleteUser(){
    this.deleteUser.emit();
  }

}
