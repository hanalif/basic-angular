import { EventEmitter, Output } from '@angular/core';
import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserInfoComponent implements OnInit {
  @Input() user: User;
  @Output() goBack = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
    console.log(this.user)
  }

  onGoBack(){
    this.goBack.emit();
  }
}
