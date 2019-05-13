import { Component, OnInit } from '@angular/core';
import { UsersService, IUser } from 'src/app/services/users.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users$: Observable<IUser[]>;

  constructor(private usersService: UsersService) { }

  ngOnInit() {
    this.users$ = this.usersService.users$;
  }

}
