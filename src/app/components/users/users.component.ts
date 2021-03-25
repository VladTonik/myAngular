import { Component, OnInit } from '@angular/core';
import {UserService} from '../../service/user/user.service';
import {User} from '../../model/user';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
 users: User[];
  constructor(private activatedRouter: ActivatedRoute) {
    this.activatedRouter.data.subscribe(value => this.users = value.userData);
  }

  ngOnInit(): void {
  }

}
