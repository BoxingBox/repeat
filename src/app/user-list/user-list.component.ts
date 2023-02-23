import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  // unames = ['Ann','Bob','Claire','David'];
  
  // private service:  UserService;

  unames:any;

  constructor(private service: UserService){
    // this.service = new UserService();
  }

  ngOnInit(): void {
    this.unames = this.service.get();
  }
}
