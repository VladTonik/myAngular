import { Injectable } from '@angular/core';
import {Resolve} from '@angular/router';
import {User} from '../../model/user';
import {UserService} from '../user/user.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserResolveService implements Resolve<User[]>{

  constructor(private userService: UserService) {

  }

  resolve(): Observable<User[]> | Promise<User[]> | User[] {
    return this.userService.getUsers();
  }
}
