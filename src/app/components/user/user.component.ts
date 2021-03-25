import {Component, Input, OnInit} from '@angular/core';
import {User} from '../../model/user';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
@Input()
user: User;
  constructor(private router: Router , private  activatedRouted: ActivatedRoute) { }

  ngOnInit(): void {
  }
goTo(): void{
  this.router.navigate([this.user.id] , {relativeTo: this.activatedRouted , state: this.user});
}
}
