import { Component, OnInit } from '@angular/core';
import { IUser } from '../user/user.model';
import { UserService } from '../user/user.service';

@Component({
  selector: 'robo-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{
user:IUser | null = null;
showSignOutMenu:boolean = false
constructor(private userService:UserService){}
ngOnInit() {
this.userService.getUser().subscribe({
  next:(user) => this.user = user
})
}
toggleSignOutMenu() {
  this.showSignOutMenu = !this.showSignOutMenu;
}
signOut() {
  this.userService.signOut();
  this.showSignOutMenu = false;
}

}
